import { Giscus } from '@giscus/react'

const Comments = () => {
  return (
    <div id="comments-section" className="border rounded border-gray-400/30 mt-4 p-4 md:-mx-4">
      <Giscus
        repo="ghosthim/giscus_discussions"
        repoId="R_kgDOGnsF1g"
        category="Announcements"
        categoryId="DIC_kwDOGnsF1s4CAh9R"
        mapping="pathname"
        reactionsEnabled="1"
        theme="preferred_color_scheme"
      />
    </div>
  )
}

export default Comments
