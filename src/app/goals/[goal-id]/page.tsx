'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const GoalDescription = () => {

  const router = useRouter()

  const goalDescription = useSearchParams().get('description')

  return (
    <div>{goalDescription}</div>
  )
}

export default GoalDescription