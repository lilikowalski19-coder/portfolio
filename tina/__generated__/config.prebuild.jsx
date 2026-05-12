// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: { mediaRoot: "", publicFolder: "public" }
  },
  schema: {
    collections: [
      // ── Work & Research ───────────────────────────────────────
      {
        name: "work",
        label: "Work & Research",
        path: "content",
        match: { include: "work" },
        format: "json",
        ui: {
          global: true,
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Untitled project" }) },
            fields: [
              {
                type: "image",
                name: "cover",
                label: "Cover image (optional)"
              },
              { type: "string", name: "num", label: "Number (e.g. 01)" },
              { type: "string", name: "category", label: "Category (e.g. Senior Thesis \xB7 2026)" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "desc",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "finding",
                label: "Key Finding (leave blank if none)",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "method",
                label: "Methods",
                list: true
              },
              {
                type: "string",
                name: "url",
                label: "External link (e.g. paper, publication URL \u2014 leave blank if none)"
              },
              {
                type: "image",
                name: "attachment",
                label: "Upload PDF or document (leave blank if none)"
              }
            ]
          }
        ]
      },
      // ── Views ─────────────────────────────────────────────────
      {
        name: "views",
        label: "Views",
        path: "content",
        match: { include: "views" },
        format: "json",
        ui: {
          global: true,
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "string",
            name: "intro",
            label: "Intro paragraph",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "views",
            label: "Views",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.topic || "Untitled view" }) },
            fields: [
              { type: "string", name: "topic", label: "Topic label (e.g. On abortion access)" },
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "string",
                name: "body",
                label: "Body text",
                ui: { component: "textarea" }
              }
            ]
          }
        ]
      },
      // ── Resources ─────────────────────────────────────────────
      {
        name: "resources",
        label: "Resources",
        path: "content",
        match: { include: "resources" },
        format: "json",
        ui: {
          global: true,
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "resources",
            label: "Resources",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Untitled resource" }) },
            fields: [
              { type: "string", name: "name", label: "Organization name" },
              {
                type: "string",
                name: "cat",
                label: "Category",
                options: ["Reproductive Care", "Immigration", "Legal Aid", "Mental Health"]
              },
              {
                type: "string",
                name: "desc",
                label: "Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "url", label: "Website (no https://)" },
              { type: "string", name: "note", label: "Hotline / note (optional)" }
            ]
          }
        ]
      },
      // ── Home page ─────────────────────────────────────────────
      {
        name: "home",
        label: "Home Page",
        path: "content",
        match: { include: "home" },
        format: "json",
        ui: {
          global: true,
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "image",
            name: "cvFile",
            label: "CV / Resume PDF (upload to update the download link)"
          },
          {
            type: "string",
            name: "featuredBeliefs",
            label: "Featured beliefs (displayed large)",
            list: true
          },
          {
            type: "string",
            name: "gridBeliefs",
            label: "Grid beliefs (displayed smaller)",
            list: true
          },
          {
            type: "object",
            name: "process",
            label: "How I Work steps",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Step" }) },
            fields: [
              { type: "string", name: "num", label: "Number (e.g. 01)" },
              { type: "string", name: "title", label: "Step title" },
              { type: "string", name: "desc", label: "Step description" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
