import * as React from "react"
import { SVGProps } from "react"

const Wrong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={23} fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L36 36M12 36L36 12" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Wrong;
