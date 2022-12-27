import React, { useState, useEffect } from "react";
import "./index.css";
import animalTree from "./data.json";

export default function Tree() {
  // const parsed = JSON.parse(animalTree)
  console.log(animalTree, "tree");
  return (
    <div className="tree">
      {animalTree.animals.map((animal) => (
        <>
          <span className="space-0">{animal.name}</span>
          {animal.family.map((animal) => (
            <>
              <span className="space-50">{animal.name}</span>

              {animal.family.map((animal) => (
                <>
                  <span className="space-95">{animal.name}</span>
                  {animal.family.map((animal) => (
                    <>
                      <span className="space-145">{animal.name}</span>
                    </>
                  ))}
                </>
              ))}
            </>
          ))}
        </>
      ))}
      {/* mammals<br/>
                <span className='space-50'>cheetah</span><br/>
                <span className='space-50'>bear</span><br/>
                <span className='space-95'>lion</span> <br/>
                <span className='space-95'>dog</span> <br/>
                <span className='space-145'>elephant</span> <br/>
                <span className='space-50'>ape</span> <br/> */}
    </div>
  );
}
