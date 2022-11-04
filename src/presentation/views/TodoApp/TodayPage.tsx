import React from "react"

enum PAGE_CONTENTS {
  TITLE = "오늘 할 일",
}

interface Props {}

const TodayPage = ({}: Props) => {
  return <>
  <h1>{PAGE_CONTENTS.TITLE}</h1>
  </>
}

export default TodayPage
