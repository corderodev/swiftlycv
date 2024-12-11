'use client'

import { useState } from 'react'

import { SideBarEditor } from '@/components/cv-edit/SideBarEditor'
import { PreviewPanel } from '@/components/cv-edit/PreviewPanel'
import { ToggleButton } from '@/components/cv-edit/buttons/ToggleButton'
import { PrintButton } from '@/components/cv-edit/buttons/PrintButton'
import { ResetButton } from '@/components/cv-edit/buttons/ResetButton'

import defaultCv from '@/components/cv-edit/cv-json/default-cv.json'

export default function CvEdit () {
  const [isEditorOpen, setIsEditorOpen] = useState(true)
  const [cv, setCv] = useState(defaultCv)
  const [lang, setLang] = useState<'en' | 'es'>('en')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setCv(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleChangeSkills = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    index: number
  ) => {
    const value = e.target.value

    setCv(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item))
    }))
  }

  const handleSectionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: string,
    index: number,
    field: string
  ) => {
    setCv(prev => ({
      ...prev,
      [section]: (prev[section as 'experience' | 'education'] || []).map(
        (item, i) => (i === index ? { ...item, [field]: e.target.value } : item)
      )
    }))
  }

  const addNewEducation = () => {
    setCv(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: '', school: '', location: '', year: '', achievements: '' }
      ]
    }))
  }

  const addNewExperience = () => {
    setCv(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { title: '', company: '', location: '', duration: '', achievements: '' }
      ]
    }))
  }

  const addNewSkill = () => {
    setCv(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }))
  }

  const addNewEntry = (section: string) => {
    switch (section) {
      case 'education':
        return addNewEducation()
      case 'experience':
        return addNewExperience()
      case 'skills':
        return addNewSkill()
    }
  }

  const deleteEntry = (
    section: 'experience' | 'education' | 'skills',
    index: number
  ) => {
    setCv(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  const clearSection = (section: 'experience' | 'education' | 'skills') => {
    setCv(prev => ({
      ...prev,
      [section]: []
    }))
  }

  return (
    <div className='flex min-h-screen max-w-screen-2xl mx-auto'>
      <SideBarEditor
        cv={cv}
        lang={lang}
        setLang={setLang}
        isEditorOpen={isEditorOpen}
        addNewEntry={addNewEntry}
        deleteEntry={deleteEntry}
        clearSection={clearSection}
        handleChange={handleChange}
        handleSectionChange={handleSectionChange}
        handleChangeSkills={handleChangeSkills}
      />

      <ResetButton setCv={setCv} />
      <ToggleButton
        isEditorOpen={isEditorOpen}
        setIsEditorOpen={setIsEditorOpen}
      />
      <PrintButton />

      <PreviewPanel
        isEditorOpen={isEditorOpen}
        lang={lang}
        name={cv.name}
        summary={cv.summary}
        location={cv.location}
        social={cv.social}
        experience={cv.experience}
        education={cv.education}
        skills={cv.skills}
      />
    </div>
  )
}
