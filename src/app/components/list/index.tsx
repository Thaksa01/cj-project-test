import { isColor } from "@/app/utils";
import { ListProps } from "./list.interface";
import React from "react"; 

const List = <T,>({ dataList, title }: ListProps<T>) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "16px",
        border: "1px solid #f0f0f0",
        width: "100%",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          {title}
        </h2>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {dataList.length > 0 ? (
          dataList.map((item, index) => (
            <div
              key={index}
              style={{
                color: "#333",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: isColor(item as string)
                  ? (item as string)
                  : "#f9f9f9",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              {item as string}
            </div>
          ))
        ) : (
          <p
            style={{
              color: "#f9f9f9",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            No items available
          </p>
        )}
      </div>
    </div>
  );
};

export default List;
