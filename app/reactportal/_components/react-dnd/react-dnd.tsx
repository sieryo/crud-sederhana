"use client";

import React, { useMemo, useState } from "react";
import * as portals from "react-reverse-portal";
import { OneDrag } from "./items/one-drag";
import {
  Draggable,
  Droppable,
  DragDropContext,
  DropResult,
} from "@hello-pangea/dnd";
import { TwoDrag } from "./items/two-drag";
import { ThreeDrag } from "./items/three-drag";
import { Button } from "@/components/ui/button";
import { Heart, LayoutDashboard, User2Icon, UserCircle } from "lucide-react";

export const ReactDnd = () => {
  const portalNode = useMemo(() => {
    return [
      {
        node: portals.createHtmlPortalNode(),
        id: "one",
        show: false,
        iconId: "icon-profile",
        icon: <UserCircle />,
      },
      {
        node: portals.createHtmlPortalNode(),
        id: "two",
        show: false,
        iconId: "icon-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        node: portals.createHtmlPortalNode(),
        id: "three",
        show: false,
        iconId: "icon-heart",
        icon: <Heart />,
      },
    ];
  }, []);
  const [items, setItems] = useState(portalNode);

  const handleDragEnd = (result: DropResult) => {
    console.log(result);
    if (result.draggableId.includes("icon")) {
      const newItems = items.map((item) => {
        if (item.iconId === result.draggableId) {
          return {
            ...item,
            show: true,
          };
        }
        return item;
      });
      console.log(newItems);
      setItems(newItems);
      return;
    }

    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination?.index, 0, reorderedItem);

    setItems(newItems);
  };
  return (
    <div className="   border ">
      <portals.InPortal node={portalNode[0].node}>
        <OneDrag />
      </portals.InPortal>

      <portals.InPortal node={portalNode[1].node}>
        <TwoDrag />
      </portals.InPortal>
      <portals.InPortal node={portalNode[2].node}>
        <ThreeDrag />
      </portals.InPortal>
      <div className=" border border-black">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div>
            <Droppable droppableId="icon">
              {(provided) => (
                <div
                  className=" flex gap-2"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((portal, i) => (
                    <Draggable
                      key={portal.iconId}
                      draggableId={portal.iconId}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {!portal.show && <Button>{portal.icon}</Button>}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className=" border p-2 w-[250px] h-[250px]">
            <Droppable droppableId="kotak">
              {(provided) => (
                <ul
                  className=" flex flex-col gap-3 kotak"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((portal, i) => (
                    <Draggable
                      key={portal.id}
                      draggableId={portal.id}
                      index={i}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          className=" bg-slate-200 "
                        >
                          {portal.show && (
                            <portals.OutPortal node={portal.node} />
                          )}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
