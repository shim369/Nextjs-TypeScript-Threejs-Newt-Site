export interface Article {
    _id: string
    title: string
    slug: string
    body: string
	coverImage:  {
		src: string
	}
	category: {
		name: string
	}
	date: Date
}