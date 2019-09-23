export const isArray = (item: any): item is any[] => Array.isArray(item)

export const serializePageQuery = ({ page, ...params }: any) => `?${new URLSearchParams(params)}`

export const getYoutubeId = (url, opts = { fuzzy: true }) => {
  if (!/youtu\.?be/.test(url)) return null

  // Look first for known patterns
  let i
  const patterns = [
    /youtu\.be\/([^#&?]{11})/, // youtu.be/<id>
    /\?v=([^#&?]{11})/, // ?v=<id>
    /&v=([^#&?]{11})/, // &v=<id>
    /embed\/([^#&?]{11})/, // embed/<id>
    /\/v\/([^#&?]{11})/, // /v/<id>
  ]

  // If any pattern matches, return the ID
  for (i = 0; i < patterns.length; ++i) {
    if (patterns[i].test(url)) return patterns[i].exec(url)[1]
  }

  if (opts.fuzzy) {
    // If that fails, break it apart by certain characters and look
    // for the 11 character key
    const tokens = url.split(/[/&?=#.\s]/g)
    for (i = 0; i < tokens.length; ++i) {
      if (/^[^#&?]{11}$/.test(tokens[i])) return tokens[i]
    }
  }
}
