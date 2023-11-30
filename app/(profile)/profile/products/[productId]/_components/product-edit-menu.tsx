"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { createPortal } from "react-dom";
import { EditProductName } from "./edit-product.name";

export function ProductEditMenu({ containerRef }: { containerRef: any }) {
  return (
    <EditProductName containerRef={containerRef}>Click me</EditProductName>
  );
}
