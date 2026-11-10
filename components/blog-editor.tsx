"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ImagePlus, Bold, Italic, Heading1, Heading2, Quote, List, Link2 } from "lucide-react"

interface BlogEditorProps {
  postId?: string
  initialTitle?: string
  initialContent?: string
  authorName: string
  userId: string
}

export function BlogEditor({ postId, initialTitle = "", initialContent = "", authorName, userId }: BlogEditorProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const isEditing = !!postId

  const insertFormatting = (before: string, after = "") => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    const newContent = content.substring(0, start) + before + selectedText + after + content.substring(end)

    setContent(newContent)

    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, end + before.length)
    }, 0)
  }

  const formatBold = () => insertFormatting("**", "**")
  const formatItalic = () => insertFormatting("*", "*")
  const formatH1 = () => insertFormatting("\n# ", "\n")
  const formatH2 = () => insertFormatting("\n## ", "\n")
  const formatQuote = () => insertFormatting("\n> ", "\n")
  const formatList = () => insertFormatting("\n- ", "\n")
  const formatLink = () => {
    const url = prompt("Enter URL:")
    if (url) insertFormatting("[", `](${url})`)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const data = await response.json()

      // Insert image markdown at cursor position
      const textarea = textareaRef.current
      if (textarea) {
        const start = textarea.selectionStart
        const imageMarkdown = `\n![${file.name}](${data.url})\n`
        const newContent = content.substring(0, start) + imageMarkdown + content.substring(start)
        setContent(newContent)
      }
    } catch (err) {
      console.error("Upload error:", err)
      setError("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const supabase = createClient()

    // Generate excerpt from first 150 characters of content (strip markdown)
    const plainText = content.replace(/[#*>[\]()!-]/g, "").trim()
    const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText

    try {
      if (isEditing) {
        const { error: updateError } = await supabase
          .from("posts")
          .update({
            title,
            content,
            excerpt,
            updated_at: new Date().toISOString(),
          })
          .eq("id", postId)
          .eq("user_id", userId)

        if (updateError) throw updateError

        router.refresh()
        router.push(`/blog/${postId}`)
      } else {
        const { data, error: insertError } = await supabase
          .from("posts")
          .insert({
            title,
            content,
            excerpt,
            author_name: authorName,
            user_id: userId,
          })
          .select("id")
          .single()

        if (insertError) throw insertError

        router.refresh()
        router.push(`/blog/${data.id}`)
      }
    } catch (err: unknown) {
      console.error("Error saving post:", err)
      setError(err instanceof Error ? err.message : "Failed to save post")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-base font-semibold">
          Title
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Give your post a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="text-xl font-serif border-2 focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-base font-semibold">
          Content
        </Label>
        <div className="border-2 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
          <div className="flex items-center gap-1 p-2 bg-muted/50 border-b flex-wrap">
            <Button type="button" variant="ghost" size="sm" onClick={formatBold} title="Bold">
              <Bold className="w-4 h-4" />
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={formatItalic} title="Italic">
              <Italic className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button type="button" variant="ghost" size="sm" onClick={formatH1} title="Heading 1">
              <Heading1 className="w-4 h-4" />
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={formatH2} title="Heading 2">
              <Heading2 className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button type="button" variant="ghost" size="sm" onClick={formatQuote} title="Quote">
              <Quote className="w-4 h-4" />
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={formatList} title="List">
              <List className="w-4 h-4" />
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={formatLink} title="Link">
              <Link2 className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              title="Upload Image"
            >
              {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
            </Button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>
          <textarea
            ref={textareaRef}
            id="content"
            placeholder="Write your story... Use **bold**, *italic*, # headings, > quotes, and more!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={18}
            className="w-full p-4 resize-y min-h-[400px] leading-relaxed focus:outline-none font-mono text-sm bg-background"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Supports Markdown: **bold**, *italic*, # headings, {">"} quotes, - lists, [links](url), ![images](url)
        </p>
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <Button type="submit" disabled={isSubmitting || isUploading || !title || !content} className="min-w-[140px]">
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              {isEditing ? "Saving..." : "Publishing..."}
            </span>
          ) : isEditing ? (
            "Save Changes"
          ) : (
            "Publish Post"
          )}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()} disabled={isSubmitting}>
          Cancel
        </Button>
        <span className="text-sm text-muted-foreground ml-auto">Posting as {authorName}</span>
      </div>
    </form>
  )
}
