import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function creatpost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen ">
      <h1 className="text-center text-3xl font-semibold">Create Post</h1>

      <form className="flex flex-col  gap-4">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          ></TextInput>
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="nexts">NextJs</option>
          </Select>
        </div>
        <div className="flex flex-4 items-center justify-between border-4  border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            className=""
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write Here"
          className="h-72 mb-12"
        ></ReactQuill>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
