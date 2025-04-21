import React from "react";

const LINK = {
  facebook: "https://www.example.com",
  instagram: "https://www.instagram.com/ngoc.vo.illustration/",
  behance: "https://www.behance.net/ngocillustration",
  vimeo: "https://vimeo.com/bongbenhcreative",
};

function SocialIcon({
  href = "https://www.example.com",
  imgSrc = "",
  width = 40,
}) {
  return (
    <a
      className="aspect-square"
      style={{ width: `${width}px` }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt="" />
    </a>
  );
}

export const InstagramIcon = ({ width }) => (
  <SocialIcon
    width={width}
    href={LINK.instagram}
    imgSrc="/img/icons/Insta.png"
  />
);

export const FacebookIcon = ({ width }) => (
  <SocialIcon
    width={width}
    href={LINK.facebook}
    imgSrc="/img/icons/Facebook.png"
  />
);

export const InstagramLiteIcon = ({ width }) => (
  <SocialIcon
    width={width}
    href={LINK.instagram}
    imgSrc="/img/icons/Insta_lite.png"
  />
);

export const FacebookLiteIcon = ({ width }) => (
  <SocialIcon
    width={width}
    href={LINK.facebook}
    imgSrc="/img/icons/Facebook_lite.png"
  />
);

export const BehanceIcon = ({ width }) => (
  <SocialIcon
    width={width}
    href={LINK.behance}
    imgSrc="/img/icons/Behance.png"
  />
);

export const VimeoIcon = ({ width }) => (
  <SocialIcon width={width} href={LINK.vimeo} imgSrc="/img/icons/Vimeo.png" />
);
