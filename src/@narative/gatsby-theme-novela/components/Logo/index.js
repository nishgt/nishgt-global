import React from 'react';
import logo from './bear.png';
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <img
    width="100"
    height="100"
    fill={'primary'}
    src={logo}
    alt="nishgt-logo"
  />
  );
}
// TODO: Omer buradaki logo degisecek
// 1- bear.png silip kendi logonu ekle.
// 2- bu dosya icerisinde import konumunu degistir