import { ImageLoaderProps } from "next/image";

const imageKitLoader = ({
  src,
  width,
  quality
}: ImageLoaderProps) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }  
  let query
  if(src.includes("?")) {
    query = (src.split(src.indexOf("?").toString()))
    console.log("query: ", src.split("?")[1])
    // query = query.slice(1)
    params.push(src.split("?")[1])
    src = src.slice(0,src.indexOf("?"))
  }
  const paramsString = params.join(",")  ;
  console.log(src + "?tr=" + paramsString)
  var urlEndpoint = "https://ik.imagekit.io/okaydokeymypath/techxent";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default imageKitLoader;
