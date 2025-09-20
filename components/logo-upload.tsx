"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Check } from "lucide-react"

interface LogoUploadProps {
  currentLogo?: string
  onLogoChange: (logoUrl: string) => void
  onClose: () => void
}

export default function LogoUpload({ currentLogo, onLogoChange, onClose }: LogoUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB")
      return
    }

    setIsUploading(true)
    setError("")

    try {
      // Get upload URL
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileType: file.type }),
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to get upload URL")
      }

      const { uploadUrl, fileUrl } = await uploadResponse.json()

      // Upload file to R2
      const uploadToR2 = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      })

      if (!uploadToR2.ok) {
        throw new Error("Failed to upload file")
      }

      // Update school logo
      const updateResponse = await fetch("/api/school/logo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ logoUrl: fileUrl }),
      })

      if (!updateResponse.ok) {
        throw new Error("Failed to update school logo")
      }

      onLogoChange(fileUrl)
      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 1500)
    } catch (error) {
      console.error("Error uploading logo:", error)
      setError("Failed to upload logo. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Upload School Logo</CardTitle>
              <CardDescription>
                Add your school's logo to make your job postings more recognizable
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 cursor-pointer">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Current logo preview */}
          {currentLogo && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Current logo:</p>
              <img
                src={currentLogo}
                alt="Current school logo"
                className="w-20 h-20 rounded-lg object-cover mx-auto border border-border"
              />
            </div>
          )}

          {/* Upload area */}
          <div
            className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {success ? (
              <div className="text-green-600">
                <Check className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Logo uploaded successfully!</p>
              </div>
            ) : (
              <div>
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground mb-1">
                  {isUploading ? "Uploading..." : "Click to upload logo"}
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading || success}
          />

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 cursor-pointer"
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
              disabled={isUploading || success}
            >
              {isUploading ? "Uploading..." : "Choose File"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}