package home

type Events struct {
	Header     string `json:"header"`
	SecHeader  string `json:"secheader"`
	Desc       string `json:"desc"`
	SampleDesc string `json:"sampledesc"`
	PostedBy   string `json:"postedby"`
	PostedOn   string `json:"postedon"`
	Price      int32  `json:"price"`
	Category   string `json:"category"`
	Address    string `json:"address"`
	ImageUrl   string `json:"imageurl"`
	EventOn    string `json:"eventon"`
	Upvoted    bool   `json:"upvoted"`
}
