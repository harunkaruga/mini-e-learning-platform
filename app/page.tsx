"use client"

import { useState, useEffect } from "react"
import { CourseCard } from "@/components/course-card"
import { CourseDetail } from "@/components/course-detail"
import { coursesData, type Course } from "@/lib/courses-data"
import { saveCourses, loadCourses, calculateProgress } from "@/lib/storage"
import { GraduationCap } from "lucide-react"

export default function Home() {
  const [courses, setCourses] = useState<Course[]>(coursesData)
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)

  // Load courses from localStorage on mount
  useEffect(() => {
    const stored = loadCourses()
    if (stored) {
      setCourses(stored)
    }
  }, [])

  // Save courses to localStorage whenever they change
  useEffect(() => {
    saveCourses(courses)
  }, [courses])

  const handleViewDetails = (courseId: string) => {
    setSelectedCourseId(courseId)
  }

  const handleBack = () => {
    setSelectedCourseId(null)
  }

  const handleToggleLesson = (courseId: string, lessonId: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.id === courseId) {
          const updatedLessons = course.lessons.map((lesson) =>
            lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson,
          )
          const updatedCourse = { ...course, lessons: updatedLessons }
          return {
            ...updatedCourse,
            progress: calculateProgress(updatedCourse),
          }
        }
        return course
      }),
    )
  }

  const handleMarkComplete = (courseId: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              completed: true,
              progress: 100,
              lessons: course.lessons.map((lesson) => ({
                ...lesson,
                completed: true,
              })),
            }
          : course,
      ),
    )
  }

  const selectedCourse = courses.find((c) => c.id === selectedCourseId)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-sans text-2xl font-bold">LearnHub</h1>
              <p className="text-sm text-muted-foreground">Your journey to mastery</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {selectedCourse ? (
          <CourseDetail
            course={selectedCourse}
            onBack={handleBack}
            onToggleLesson={(lessonId) => handleToggleLesson(selectedCourse.id, lessonId)}
            onMarkComplete={() => handleMarkComplete(selectedCourse.id)}
          />
        ) : (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-sans text-3xl font-bold text-balance">Explore Courses</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose from our curated selection of courses and start learning today
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} onViewDetails={handleViewDetails} />
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-sans text-xl font-semibold mb-2">Your Learning Stats</h3>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">{courses.length}</p>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-accent">{courses.filter((c) => c.completed).length}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">
                    {courses.filter((c) => c.progress > 0 && !c.completed).length}
                  </p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
