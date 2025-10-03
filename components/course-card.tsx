"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, BookOpen } from "lucide-react"
import type { Course } from "@/lib/courses-data"
import Image from "next/image"

interface CourseCardProps {
  course: Course
  onViewDetails: (courseId: string) => void
}

export function CourseCard({ course, onViewDetails }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        {course.completed && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent text-accent-foreground">Completed</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-sans text-xl font-semibold leading-tight text-balance">{course.title}</h3>
          <Badge variant="secondary" className="shrink-0">
            {course.level}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">{course.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons.length} lessons</span>
          </div>
        </div>
        {course.progress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-primary">{course.progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${course.progress}%` }} />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={() => onViewDetails(course.id)} className="w-full transition-all duration-200 hover:scale-105">
          View Course
        </Button>
      </CardFooter>
    </Card>
  )
}
