import { Giscus } from '@giscus/react'

const Comments = () => {
  return (
    <div id="comments-section" className="border rounded border-gray-400/30 mt-4 p-4 md:-mx-4">
        <script src="https://giscus.app/client.js"
              data-repo="ghosthim/giscus_discussions"
              data-repo-id="R_kgDOGnsF1g"
              data-category="Announcements"
              data-category-id="DIC_kwDOGnsF1s4CAh9R"
              data-mapping="pathname"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-theme="preferred_color_scheme"
              data-lang="en"
              crossOrigin="anonymous"
              async>
        </script>
    </div>
  )
}

export default Comments
