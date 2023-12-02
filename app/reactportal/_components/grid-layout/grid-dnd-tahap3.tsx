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

type Items = {
  node?: any;
  id?: string;
  i?: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  isResizable?: boolean;
  isBounded?: boolean;
  maxW?: number;
  maxH?: number;
  show?: boolean;
}[];

export const GridDndThree = () => {
  //! Harapan yang akan dicapai saat tahap 3:

  // Bisa dynamic resize

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
  const items: Items = useMemo(() => {
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
      <div className=" flex gap-2">
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
          layout={layout as any}
          cols={12}
          rowHeight={150}
          width={1200}
          isDroppable={true}
          droppingItem={{
            i: "dropElement",
            w: 2,
            h: 2,
          }}
          onDrop={(la, item, e: any) => {
            const widgetType = e.dataTransfer.getData("widgetType");
            const targetIndex = parseInt(
              e.currentTarget.getAttribute("data-index") as string
            );
            let newSize = {};

            if (item.y > 0) {
              newSize = {
                h: 1,
                w: 4,
              };
            }
            const newItem = {
              ...item,
              ...newSize,
              node:
                portalNodes.find((node) => node.id === widgetType)?.node ||
                undefined,
              id: widgetType,
              isResizable: true,
              isBounded: true,
              show: true,
            };

            console.log(newItem);

            const newLayout = [...layout, newItem];

            setLayout(newLayout);
          }}
          onDrag={(newLayout, oldItem, newItem, placeholder) => {
            if (placeholder.y > 0) {
              placeholder.h = 1;
              placeholder.w = 4;
            }
            const updatedLayout = layout.map((item, index) => {
              const newItem = {
                x: newLayout[index].x,
                y: newLayout[index].y,
              };
              return {
                ...item,
                ...newItem,
              };
            });
            console.log(updatedLayout);
            // Set the updated layout

            setLayout(updatedLayout);
          }}
          onResize={(newLayout) => {
            const updatedLayout = layout.map((item, index) => {
              const newSize = {
                h: newLayout[index].h,
                w: newLayout[index].w,
              };
              return {
                ...item,
                ...newSize,
              };
            });
            // Set the updated layout

            setLayout(updatedLayout);
          }}
          onLayoutChange={(newLayout) => {
            console.log(newLayout);
            const updatedLayout = layout.map((item, index) => {
              let newSize = {};
              if (
                newLayout[index].y > 0 &&
                newLayout[index].i === "dropElement"
              ) {
                newSize = {
                  h: 1,
                  w: 4,
                };
              }
              const newItem = {
                x: newLayout[index].x,
                y: newLayout[index].y,
              };
              return {
                ...newSize,
                ...item,
                ...newItem,
              };
            });

            // Set the updated layout
            setLayout(updatedLayout);
          }}
        >
          {layout.map((item, index) => {
            return (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleOnDrop}
                className={cn(" bg-slate-200", item.show && "bg-slate-200")}
                key={index}
                data-grid={item}
                data-index={index}
              >
                {item?.node && <portals.OutPortal node={item.node} />}
              </div>
            );
          })}
        </GridLayout>
      </div>
    </>
  );
};
