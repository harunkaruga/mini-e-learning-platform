"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, BookOpen, CheckCircle2, Circle } from "lucide-react"
import type { Course } from "@/lib/courses-data"
import Image from "next/image"

interface CourseDetailProps {
  course: Course
  onBack: () => void
  onToggleLesson: (lessonId: string) => void
  onMarkComplete: () => void
}

export function CourseDetail({ course, onBack, onToggleLesson, onMarkComplete }: CourseDetailProps) {
  const completedLessons = course.lessons.filter((l) => l.completed).length
  const allLessonsCompleted = completedLessons === course.lessons.length

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="gap-2 transition-all duration-200 hover:gap-3">
        <ArrowLeft className="h-4 w-4" />
        Back to Courses
      </Button>

      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-muted">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        {course.completed && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">✓ Completed</Badge>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-sans text-4xl font-bold leading-tight text-balance">{course.title}</h1>
          <Badge variant="secondary" className="text-base px-3 py-1">
            {course.level}
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">{course.description}</p>

        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="font-medium">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span>{course.lessons.length} lessons</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Course Progress</span>
            <span className="text-sm font-semibold text-primary">
              {completedLessons} / {course.lessons.length} lessons completed
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${course.progress}%` }} />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <h2 className="font-sans text-2xl font-semibold">Course Lessons</h2>
        </CardHeader>
        <CardContent className="space-y-2">
          {course.lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => onToggleLesson(lesson.id)}
              className="w-full text-left p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 hover:border-primary/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  {lesson.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">Lesson {index + 1}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </span>
                  </div>
                  <h3
                    className={`font-medium mt-1 ${
                      lesson.completed ? "text-muted-foreground line-through" : "text-foreground"
                    }`}
                  >
                    {lesson.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button
          onClick={onMarkComplete}
          disabled={course.completed}
          size="lg"
          className="flex-1 transition-all duration-200 hover:scale-105"
        >
          {course.completed ? "Course Completed ✓" : "Mark Course as Complete"}
        </Button>
      </div>

      {allLessonsCompleted && !course.completed && (
        <Card className="border-accent bg-accent/10">
          <CardContent className="pt-6">
            <p className="text-center text-accent-foreground font-medium">
              🎉 Congratulations! You've completed all lessons. Mark the course as complete to celebrate your
              achievement!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
