import React from 'react'
import { RTKitA } from './RTKitA'
import { RTKitB } from './RTKitB'
import { RTKitC } from './RTKitC'
import { RTKitD } from './RTKitD'

export const MainRTKit: React.FC = () => {
  return (
    <div className="gird grid-cols-2 gap40">
      <RTKitA />
      <RTKitB />
      <RTKitC />
      <RTKitD />
    </div>
  )
}
