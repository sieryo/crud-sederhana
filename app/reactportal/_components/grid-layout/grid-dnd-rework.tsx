"use client";

import React, { AriaAttributes, useMemo, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import * as portals from "react-reverse-portal";
import { Coba } from "../coba";
import { BanIcon, Square, User2Icon, XIcon } from "lucide-react";
import { Kotak } from "../kotak";

import { cn } from "@/lib/utils";

export const GridDndRework = () => {
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
  const widgetItems = useMemo(() => {
    return [
      {
        id: "profile",
        i: "0",
        show: true,
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        isResizable: false,
        isBounded: false,
        maxW: 1,
        maxH: 1,
        icon: <User2Icon />,
      },
      {
        id: "kotak",
        i: "1",
        show: true,
        x: 2,
        y: 0,
        w: 1,
        h: 1,
        isResizable: false,
        isBounded: false,
        maxW: 1,
        maxH: 1,
        icon: <Square />,
      },
    ];
  }, []);

  const [widgetsLayout, setWidgetsLayout] = useState(items);
  const [widgetsIcon, setWidgetsIcon] = useState(widgetItems);

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleDragOver = (e: any) => {
    const targetIndex = parseInt(e.currentTarget.getAttribute("data-index"));

    if (widgetsLayout[targetIndex].node !== undefined) return;

    e.preventDefault();
    e.target.classList.add("drag-over");
  };

  const handleDragLeave = (e: any) => {
    e.target.classList.remove("drag-over");
  };

  const handleOnDrop = (e: React.DragEvent | any) => {
    e.stopPropagation();
    const widgetType = e.dataTransfer.getData("widgetType");
    e.target.classList.remove("drag-over");
    const targetIndex = parseInt(
      e.currentTarget.getAttribute("data-index") as string
    );

    if (widgetsLayout[targetIndex].node !== undefined) return;
    const updatedLayout = widgetsLayout.map((item, index) => {
      if (index === targetIndex && item.node === undefined) {
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

    const updatedWidgets = widgetsIcon.map((widget, index) => {
      if (widget.id === widgetType) {
        return {
          ...widget,
          show: false,
        };
      }
      return widget;
    });

    console.log(updatedWidgets);

    setWidgetsIcon(updatedWidgets);
    setWidgetsLayout(updatedLayout as any);
  };

  const handleButtonClose = (targetIndex: any, id: any) => {
    const updatedWidgetsLayout = widgetsLayout.map((widget, index) => {
      if (widget.id === id && index === targetIndex) {
        return {
          ...widget,
          node: undefined,
          id: "",
        };
      }
      return widget;
    });
    const updatedWidgets = widgetsIcon.map((widget, index) => {
      if (widget.id === id) {
        return {
          ...widget,
          show: true,
        };
      }
      return widget;
    });
    setWidgetsIcon(updatedWidgets);
    setWidgetsLayout(updatedWidgetsLayout as any);
  };

  return (
    <>
      <portals.InPortal node={portalNodes[0].node}>
        <Coba />
      </portals.InPortal>
      <portals.InPortal node={portalNodes[1].node}>
        <Kotak />
      </portals.InPortal>
      <div className=" flex gap-2 border h-screen">
        <div className=" flex w-[100px] bg-slate-400">
          <GridLayout
            layout={widgetsIcon}
            cols={1}
            rowHeight={100}
            width={100}
            className=" "
            compactType={null}
            preventCollision
            maxRows={widgetsIcon.length}
            isDraggable={false}
            isDroppable
          >
            {widgetsIcon
              .filter((widget) => widget.show == true)
              .map((widget) => (
                <div
                  onDragStart={(e) => handleOnDrag(e, widget.id)}
                  data-grid={widget}
                  key={widget.id}
                  draggable
                  className="flex justify-center items-center bg-slate-500 "
                >
                  {widget.icon}
                </div>
              ))}
          </GridLayout>

          <div className=" pl-[200px]">
            <GridLayout
              className=" "
              layout={widgetsLayout}
              cols={6}
              rowHeight={150}
              width={900}
              maxRows={5}
              onLayoutChange={(item) => {
                console.log(item);
                const newLayout = widgetsLayout.map((l, i) => {
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
                setWidgetsLayout(newLayout);
              }}
            >
              {widgetsLayout.map((item, index) => {
                return (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleOnDrop}
                    className={cn(" bg-slate-200 relative pr-[50px]")}
                    key={index}
                    data-index={index}
                    data-grid={item}
                  >
                    {item?.node && (
                      <>
                        <portals.OutPortal node={item.node} />
                        <div className=" absolute bottom-[-30px] right-0 text-black/80 p-1">
                          <button
                            className=" z-50"
                            onClick={() => handleButtonClose(index, item.id)}
                          >
                            Close
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </GridLayout>
          </div>
        </div>
      </div>
    </>
  );
};
