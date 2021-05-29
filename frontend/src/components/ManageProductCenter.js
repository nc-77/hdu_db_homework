import React from "react";
import PutOnProductForm from "./ManageProductForm";
import ManageProductTitlebarGridList from "./ManageProductTitlebarGridList";

export default function ManageProductCenter({
  uploadInfo,
  uploadProductHandleChange,
  uploadProductSubmit,
  handleUpload,
  showManageProductCenter,
  goodsInfo,
  handleGoods,
}) {
  return (
    <div id="manageProductCenter">
      {showManageProductCenter && (
        <>
          <ManageProductTitlebarGridList
            info={goodsInfo}
            handleChange={handleGoods}
          />
          <div className="market-search-params">
            <PutOnProductForm
              uploadInfo={uploadInfo}
              uploadProductHandleChange={uploadProductHandleChange}
              uploadProductSubmit={uploadProductSubmit}
            />
            {/* {showUpload && (
              <ShoppingCart
                cartInfo={cartInfo}
                orderInfo={orderInfo}
                OrderHandleChange={OrderHandleChange}
                OrderHandleSubmit={OrderHandleSubmit}
              />
            )} */}
          </div>
        </>
      )}
    </div>
  );
}
