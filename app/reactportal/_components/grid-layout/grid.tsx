"use client";

import React, { useMemo, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import * as portals from "react-reverse-portal";
import { Coba } from "../coba";
import { FormAddPortal } from "../form-add-portal";
import "/node_modules/react-grid-layout/css/styles.css";
import { BanIcon } from "lucide-react";
import { Kotak } from "../kotak";

export const Grid = () => {
  const portalNode = useMemo(() => {
    return [
      {
        node: portals.createHtmlPortalNode(),
        id: "profile",
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isResizable: true,
        isBounded: true,
        maxW: 3,
        maxH: 4,
      },
      {
        node: portals.createHtmlPortalNode(),
        id: "kotak",
        i: "b",
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        isResizable: true,
        isBounded: true,
        maxW: 3,
        maxH: 4,
      },
    ];
  }, []);
  // Definisi layout grid

  const [layout, setLayout] = useState<Layout[]>(portalNode);
  var randomstring = require("randomstring");

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  return (
    <>
      <portals.InPortal node={portalNode[0].node}>
        <Coba />
      </portals.InPortal>
      <portals.InPortal node={portalNode[1].node}>
        <Kotak />
      </portals.InPortal>

      <div>
        <div
          draggable={true}
          onDragStart={(e) => handleOnDrag(e, "profile")}
          className=" w-[40px] h-[40px] flex justify-center items-center bg-slate-500"
        >
          <BanIcon />
        </div>
        <div
          draggable={true}
          onDragStart={(e) => handleOnDrag(e, "kotak")}
          className=" w-[40px] h-[40px] flex justify-center items-center bg-slate-500"
        >
          <BanIcon />
        </div>
        <GridLayout
          className="border"
          layout={layout}
          cols={12}
          rowHeight={150}
          width={1200}
          isDroppable={true}
          onDrop={(l, item, e) => {
            const data = e.dataTransfer.getData("widgetType");
            const newLayout = layout.map((l) => {
              if (l.i === "a") {
                return {
                  ...l,
                  i: data,
                };
              }
              return l;
            });
            console.log(newLayout);
            setLayout(newLayout);
          }}
          onDragStop={(item) => {
            console.log(item);
          }}
        >
          {layout.map((la, index) => {
            return (
              <div className=" bg-slate-200" key={index}>
                {la.i === portalNode[0].id && (
                  <portals.OutPortal node={portalNode[0].node} />
                )}
              </div>
            );
          })}
        </GridLayout>
      </div>
    </>
  );
};
