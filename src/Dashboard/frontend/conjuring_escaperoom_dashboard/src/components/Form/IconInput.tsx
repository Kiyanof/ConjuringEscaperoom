"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Input, { InputProps } from './Input'

interface IconInputProps extends InputProps {
  icon: IconDefinition
  iconPosition?: 'left' | 'right'
  iconClassName?: string
}

const IconInput: React.FC<IconInputProps> = ({
  icon,
  iconPosition = 'left',
  iconClassName,
  className,
  ...inputProps
}) => {
  return (
    <div className="relative">
      {iconPosition === 'left' && (
        <FontAwesomeIcon
          icon={icon}
          className={`${iconClassName} absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500`}
        />
      )}
      <Input className={`${className}`} {...inputProps} />
      {iconPosition === 'right' && (
        <FontAwesomeIcon
          icon={icon}
          className={`${iconClassName} absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500`}
        />
      )}
    </div>
  )
}

export default IconInput
