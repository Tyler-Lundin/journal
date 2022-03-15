import React from 'react'
import { useSelector } from 'react-redux'

const ImageCredit = () => {
  const index = useSelector(state=>state.selectedBackground.value)
  console.log(index)
  return (
    <>
        Photo by 
        <a href={imageCreditList[index|| 1][0]}> {imageCreditList[index|| 1][1]} </a>
        on
        <a href={imageCreditList[index|| 1][2]}> Unsplash</a>
    </>
  )
}

export default ImageCredit

const imageCreditList = [
  [
    "https://unsplash.com/@yespanioly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Yousef Espanioly",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@yourfriendandy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Your Friend Andy",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@wackeltin_meem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Valentin Müller",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Johannes Plenio",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@jareeign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Reign Abarintos",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@sandramode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Sandra Ahn Mode",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@luc_dobigeon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Luc Dobigeon",
    "https://unsplash.com/s/photos/sky-night-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@babybluecat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "J Lee",
    "https://unsplash.com/s/photos/cherry-blossom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@ryan_hutton_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Ryan Hutton",
    "https://unsplash.com/s/photos/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "eberhard 🖐 grossgasteiger",
    "https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@silvestrimatteo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Silvestri Matteo",
    "https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@mdehevia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Marco De Hevia",
    "https://unsplash.com/s/photos/sunflower-field?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@roma_kaiuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText   ",
    "Roma Kaiuk",
    "https://unsplash.com/s/photos/sunflower-field?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@hixenia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Kseniia Rastvorova",
    "https://unsplash.com/s/photos/field?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@ujitomo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "TOMOKO UJI",
    "https://unsplash.com/s/photos/flowers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@sepoys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Rohit Tandon",
    "https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@kalenemsley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Kalen Emsley",
    "https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
  [
    "https://unsplash.com/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Benjamin Voros",
    "https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  ],
]

