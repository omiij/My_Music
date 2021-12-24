import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Backk,
  Singer,
  Pitb,
  Jeni,
  Radf,
  Mar,
  Alex,
  Akc,
  Yankee,
  Char,
  Kish,
  Bru,
  Tay,
  Jub,
} from "../All_Pages_Route/Pages";
import Form from "../../Sign-Up Form/Form";

export function Singer1() {
  return (
    <>
      <Routes>
        <Route path="/Singer" element={<Singer />} />
      </Routes>
    </>
  );
}

export function Bakk1() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Backk />} />
      </Routes>
    </>
  );
}

export function Pitb1() {
  return (
    <>
      <Routes>
        <Route path="/Pitsong" element={<Pitb />} />
      </Routes>
    </>
  );
}

export function Jeni1() {
  return (
    <>
      <Routes>
        <Route path="/Jenisong" element={<Jeni />} />
      </Routes>
    </>
  );
}

export function Radf1() {
  return (
    <>
      <Routes>
        <Route path="/Radfoosong" element={<Radf />} />
      </Routes>
    </>
  );
}

export function Mar1() {
  return (
    <>
      <Routes>
        <Route path="/Maroonsong" element={<Mar />} />
      </Routes>
    </>
  );
}

export function Alex1() {
  return (
    <>
      <Routes>
        <Route path="/Alexasong" element={<Alex />} />
      </Routes>
    </>
  );
}

export function Akc1() {
  return (
    <>
      <Routes>
        <Route path="/Akcentsong" element={<Akc />} />
      </Routes>
    </>
  );
}

export function Yankee1() {
  return (
    <>
      <Routes>
        <Route path="/Dadyyankeesong" element={<Yankee />} />
      </Routes>
    </>
  );
}

export function Char1() {
  return (
    <>
      <Routes>
        <Route path="/Puthsong" element={<Char />} />
      </Routes>
    </>
  );
}

export function Kish1() {
  return (
    <>
      <Routes>
        <Route path="/KishorKumarsong" element={<Kish />} />
      </Routes>
    </>
  );
}

export function Bru1() {
  return (
    <>
      <Routes>
        <Route path="/Brunosong" element={<Bru />} />
      </Routes>
    </>
  );
}

export function Tay1() {
  return (
    <>
      <Routes>
        <Route path="/Taylorsong" element={<Tay />} />
      </Routes>
    </>
  );
}

export function Jub1() {
  return (
    <>
      <Routes>
        <Route path="/Jubinsong" element={<Jub />} />
      </Routes>
    </>
  );
}

export function SignUp() {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<Form />} />
      </Routes>
    </>
  );
}
