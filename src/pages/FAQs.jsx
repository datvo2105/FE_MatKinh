import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faqs = () => {
  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">FAQs</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <h2 className="title h2">Những câu hỏi thường gặp</h2>
            <br />
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Tôi không biết cách chọn kính phù hợp với khuôn mặt của mình
                    ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Chuyên gia stylish của Cửa Hàng luôn sẵn sàng tư vấn cho quý
                    khách kính mắt hợp nhất với khuôn mặt của mình. Vui lòng tới
                    trực tiếp cửa hàng hoặc gửi cho đội ngũ 1 tấm ảnh của quý
                    khách.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Tôi có thể tới cửa hàng để đo mắt & kiểm tra thị lực không ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Đo mắt và kiểm tra thị lực hoàn toàn miễn phí, được thực
                    hiện bởi KTV Khúc Xạ BV Mắt HCM trên 10 năm kinh nghiệm &
                    thiết bị máy móc nhập khẩu 100% từ Pháp.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Tôi có thể đặt hàng Online không ?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Quý khách có thể đặt hàng online thông qua website.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Tôi có được kiểm tra và thử kính trước khi thanh toán ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Quý khách được kiểm tra sản phẩm và đeo thử trước khi thanh
                    toán tiền cho nhân viên bưu điện. Nếu không hài lòng quý
                    khách có thể từ chối nhận sản phẩm mà không phải thanh toán
                    bất cứ 1 khoản phí nào.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Sản phẩm có được bảo hành không ?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Tất cả sản phẩm được bán ra đều có hóa đơn và thẻ bảo hành
                    chính hãng hoặc thẻ bảo hành của cửa hàng đối với hàng xách
                    tay.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Sản phẩm có hỗ trợ đổi trả không ?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Tất cả sản phẩm bán ra đều được hỗ trợ đổi trả trong vòng 15
                    ngày theo “chính sách đổi trả” của công ty.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
