"use client"

import type { Course } from "./courses-data"

const STORAGE_KEY = "elearning_courses"

export function saveCourses(courses: Course[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses))
  }
}

export function loadCourses(): Course[] | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export function calculateProgress(course: Course): number {
  const completedLessons = course.lessons.filter((l) => l.completed).length
  return Math.round((completedLessons / course.lessons.length) * 100)
}
