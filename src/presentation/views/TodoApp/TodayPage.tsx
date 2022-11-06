import React from "react"
import { Link } from "react-router-dom"

import { PATH } from "./index"

enum PAGE_CONTENTS {
  TITLE = "오늘 할 일",
  GOTO_HOME = "모든 할 일 보러가기",
}

interface Props {}

const TodayPage = ({}: Props) => {
  return <>
  <h1 className="title">{PAGE_CONTENTS.TITLE}</h1>
  <Link to={PATH.HOME} className="link">{PAGE_CONTENTS.GOTO_HOME}</Link>
  </>
}

export default TodayPage
