let BufferImages = [
"https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/128874829_3634741586613498_4137108961450788451_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=CNdXPS8EVf8AX_fACWU&_nc_ht=scontent.flhe5-1.fna&oh=ab86638d68a4efa4809911e8771ce6ac&oe=608C1672",
"https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/116413542_3261694033918257_8886432546279943619_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=ifPK9T7J5g0AX8hOjkk&_nc_ht=scontent.flhe5-1.fna&oh=f1f657a9037497ba378f3498623b444d&oe=608AE83A",
"https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/159221379_3888907197863601_7675534066676461030_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MJlxMOIygggAX_PGMmK&_nc_ht=scontent.flhe5-1.fna&oh=259601a4647c5f7a9426f3b913d37e91&oe=608D3C53",
"https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/156109234_3866063670147954_961605013584008994_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NNnXUKiBUFIAX9lbNtu&_nc_ht=scontent.flhe5-1.fna&oh=6945204b3e4779ab3aadeb180a986111&oe=608CE2FF",
];
var urls=['*://facebook.com/*','*://us0.forgeofempires.com/*','https://www.facebook.com/*'];


const imgs = document.getElementsByTagName("img")


for(let i=0;i<imgs.length;i++)
{
	const randomImg = Math.floor(Math.random() * BufferImages.length)
    imgs[i].src=BufferImages[randomImg];
	
}
chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => ({cancel: true}),
    {urls: urls},
    ["blocking"]
);
