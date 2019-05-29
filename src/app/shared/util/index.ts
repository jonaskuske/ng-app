export const isArray = (item: any): item is any[] => Array.isArray(item)

export const serializePageQuery = ({ page, ...params }: any) => `?${new URLSearchParams(params)}`
