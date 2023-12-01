"use client";

import React, { AriaAttributes, useMemo, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import * as portals from "react-reverse-portal";
import { Coba } from "../coba";
import { BanIcon } from "lucide-react";
import { Kotak } from "../kotak";
import {
  Draggable,
  Droppable,
  DragDropContext,
  DropResult,
} from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";

export const GridDnd = () => {
  const portalNodes = useMemo(() => {
    return [
      {
        node: portals.createHtmlPortalNode(),
        id: "profile",
      },
      {
        node: portals.createHtmlPortalNode(),
        id: "kotak",
      },
    ];
  }, []);
  const items = useMemo(() => {
    return [
      {
        node: undefined,
        id: "",
        i: "0",
        show: false,
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        isResizable: true,
        isBounded: true,
        maxW: 3,
        maxH: 4,
      },
      {
        node: undefined,
        id: "",
        i: "1",
        show: false,
        x: 2,
        y: 0,
        w: 2,
        h: 1,
        isResizable: true,
        isBounded: true,
        maxW: 3,
        maxH: 4,
      },
    ];
  }, []);

  const [layout, setLayout] = useState(items);

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.target.classList.add("drag-over");
  };

  const handleDragLeave = (e: any) => {
    e.target.classList.remove("drag-over");
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    const targetIndex = parseInt(
      e.currentTarget.getAttribute("data-index") as string
    );

    const updatedLayout = layout.map((item, index) => {
      if (index === targetIndex) {
        return {
          ...item,
          show: true,
          id: widgetType,
          node:
            portalNodes.find((node) => node.id === widgetType)?.node ||
            undefined,
        };
      }
      return item;
    });

    console.log(updatedLayout);
    setLayout(updatedLayout as any);
  };

  return (
    <>
      <portals.InPortal node={portalNodes[0].node}>
        <Coba />
      </portals.InPortal>
      <portals.InPortal node={portalNodes[1].node}>
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
      </div>

      <div>
        <GridLayout
          className="border"
          layout={layout}
          cols={12}
          rowHeight={150}
          width={1200}
          // isDroppable={true}
          // onDrop={(la, item, e: any) => {
          //   const id = e.dataTransfer.getData("id") as string;
          //   console.log(la);
          //   const newLayout = layout.map((layout, index) => {
          //     if (layout.id === id) {
          //       return {
          //         ...layout,
          //         show: true,
          //       };
          //     }
          //     return layout;
          //   });
          //   setLayout(newLayout);
          // }}
          onLayoutChange={(item) => {
            console.log(item);
            const newLayout = layout.map((l, i) => {
              const newPosition = {
                x: item[i].x,
                y: item[i].y,
              };
              const newSize = {
                w: item[i].w,
                h: item[i].h,
              };
              return {
                ...l,
                ...newPosition,
                ...newSize,
              };
            });
            setLayout(newLayout);
          }}
        >
          {layout.map((item, index) => {
            return (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleOnDrop}
                className={cn("", item.show && "bg-slate-200")}
                key={index}
                data-index={index}
              >
                {item.show && item?.node && (
                  <portals.OutPortal node={item.node} />
                )}
              </div>
            );
          })}
        </GridLayout>
      </div>
    </>
  );
};
