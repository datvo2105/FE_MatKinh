import Layouts from "../layouts/Layouts";

const Cart = () => {
  return (
    <Layouts
      content={
        <>
          <div className="page section-header text-center">
            <div className="page-title">
              <div className="wrapper">
                <h1 className="page-width">Shopping Cart</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                <div
                  className="alert alert-success text-uppercase"
                  role="alert"
                >
                  <i className="icon anm anm-truck-l icon-large"></i> &nbsp;
                  <strong>Congratulations!</strong>
                  You've got free shipping!
                </div>
                <form action="#" method="post" className="cart style2">
                  <table>
                    <thead className="cart__row cart__header">
                      <tr>
                        <th colSpan="2" className="text-center">
                          Product
                        </th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-right">Total</th>
                        <th className="action">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart__row border-bottom line1 cart-flex border-top">
                        <td className="cart__image-wrapper cart-flex-item">
                          <a href="#">
                            <img
                              className="cart__image"
                              src="assets/images/product-images/product-image30.jpg"
                              alt="Elastic Waist Dress - Navy / Small"
                            />
                          </a>
                        </td>
                        <td className="cart__meta small--text-left cart-flex-item">
                          <div className="list-view-item__title">
                            <a href="#">Elastic Waist Dress </a>
                          </div>

                          <div className="cart__meta-text">
                            Color: Navy
                            <br />
                            Size: Small
                            <br />
                          </div>
                        </td>
                        <td className="cart__price-wrapper cart-flex-item">
                          <span className="money">$735.00</span>
                        </td>
                        <td className="cart__update-wrapper cart-flex-item text-right">
                          <div className="cart__qty text-center">
                            <div className="qtyField">
                              <a
                                className="qtyBtn minus"
                                href="event.default();"
                              >
                                <i className="icon icon-minus"></i>
                              </a>
                              <input
                                className="cart__qty-input qty"
                                type="text"
                                name="updates[]"
                                id="qty"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <a
                                className="qtyBtn plus"
                                href="event.default();"
                              >
                                <i className="icon icon-plus"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right small--hide cart-price">
                          <div>
                            <span className="money">$735.00</span>
                          </div>
                        </td>
                        <td className="text-center small--hide">
                          <a
                            href="#"
                            className="btn btn--secondary cart__remove"
                            title="Remove tem"
                          >
                            <i className="icon icon anm anm-times-l"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="cart__row border-bottom line1 cart-flex border-top">
                        <td className="cart__image-wrapper cart-flex-item">
                          <a href="#">
                            <img
                              className="cart__image"
                              src="assets/images/product-images/home7-product5.jpg"
                              alt="3/4 Sleeve Kimono Dress"
                            />
                          </a>
                        </td>
                        <td className="cart__meta small--text-left cart-flex-item">
                          <div className="list-view-item__title">
                            <a href="#">3/4 Sleeve Kimono Dress</a>
                          </div>
                          <div className="cart__meta-text">
                            Color: Gray
                            <br />
                            Size: Large
                            <br />
                          </div>
                        </td>
                        <td className="cart__price-wrapper cart-flex-item">
                          <span className="money">$735.00</span>
                        </td>
                        <td className="cart__update-wrapper cart-flex-item text-right">
                          <div className="cart__qty text-center">
                            <div className="qtyField">
                              <a
                                className="qtyBtn minus"
                                href="event.default();"
                              >
                                <i className="icon icon-minus"></i>
                              </a>
                              <input
                                className="cart__qty-input qty"
                                type="text"
                                name="updates[]"
                                id="qty"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <a
                                className="qtyBtn plus"
                                href="event.default();"
                              >
                                <i className="icon icon-plus"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right small--hide cart-price">
                          <div>
                            <span className="money">$735.00</span>
                          </div>
                        </td>
                        <td className="text-center small--hide">
                          <a
                            href="#"
                            className="btn btn--secondary cart__remove"
                            title="Remove tem"
                          >
                            <i className="icon icon anm anm-times-l"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="cart__row border-bottom line1 cart-flex border-top">
                        <td className="cart__image-wrapper cart-flex-item">
                          <a href="#">
                            <img
                              className="cart__image"
                              src="assets/images/product-images/home7-product4.jpg"
                              alt="Minerva Dress black"
                            />
                          </a>
                        </td>
                        <td className="cart__meta small--text-left cart-flex-item">
                          <div className="list-view-item__title">
                            <a href="#">Minerva Dress black</a>
                          </div>
                        </td>
                        <td className="cart__price-wrapper cart-flex-item">
                          <span className="money">$526.00</span>
                        </td>
                        <td className="cart__update-wrapper cart-flex-item text-right">
                          <div className="cart__qty text-center">
                            <div className="qtyField">
                              <a
                                className="qtyBtn minus"
                                href="event.default();"
                              >
                                <i className="icon icon-minus"></i>
                              </a>
                              <input
                                className="cart__qty-input qty"
                                type="text"
                                name="updates[]"
                                id="qty"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <a
                                className="qtyBtn plus"
                                href="event.default();"
                              >
                                <i className="icon icon-plus"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right small--hide cart-price">
                          <div>
                            <span className="money">$735.00</span>
                          </div>
                        </td>
                        <td className="text-center small--hide">
                          <a
                            href="#"
                            className="btn btn--secondary cart__remove"
                            title="Remove tem"
                          >
                            <i className="icon icon anm anm-times-l"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="text-left">
                          <a
                            href="http://annimexweb.com/"
                            className="btn btn-secondary btn--small cart-continue"
                          >
                            Continue shopping
                          </a>
                        </td>
                        <td colSpan="3" className="text-right">
                          <button
                            type="submit"
                            name="clear"
                            className="btn btn-secondary btn--small small--hide"
                          >
                            Clear Cart
                          </button>
                          <button
                            type="submit"
                            name="update"
                            className="btn btn-secondary btn--small cart-continue ml-2"
                          >
                            Update Cart
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </form>
              </div>

              <div className="container mt-4">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                    <h5>Discount Codes</h5>
                    <form action="#" method="post">
                      <div className="form-group">
                        <label htmlFor="address_zip">
                          Enter your coupon code if you have one.
                        </label>
                        <input type="text" name="coupon" />
                      </div>
                      <div className="actionRow">
                        <div>
                          <input
                            type="button"
                            className="btn btn-secondary btn--small"
                            defaultValue="Apply Coupon"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                    <h5>Estimate Shipping and Tax</h5>
                    <form action="#" method="post">
                      <div className="form-group">
                        <label htmlFor="address_country">Country</label>
                        <select
                          id="address_country"
                          name="address[country]"
                          data-default="United States"
                        >
                          <option defaultValue="Belgium" data-provinces="[]">
                            Belgium
                          </option>
                          <option defaultValue="---" data-provinces="[]">
                            ---
                          </option>
                          <option
                            defaultValue="Afghanistan"
                            data-provinces="[]"
                          >
                            Afghanistan
                          </option>
                          <option
                            defaultValue="Aland Islands"
                            data-provinces="[]"
                          >
                            Åland Islands
                          </option>
                          <option defaultValue="Albania" data-provinces="[]">
                            Albania
                          </option>
                          <option defaultValue="Algeria" data-provinces="[]">
                            Algeria
                          </option>
                          <option defaultValue="Andorra" data-provinces="[]">
                            Andorra
                          </option>
                          <option defaultValue="Angola" data-provinces="[]">
                            Angola
                          </option>
                          <option defaultValue="Anguilla" data-provinces="[]">
                            Anguilla
                          </option>
                          <option
                            defaultValue="Antigua And Barbuda"
                            data-provinces="[]"
                          >
                            Antigua &amp; Barbuda
                          </option>
                          <option defaultValue="Armenia" data-provinces="[]">
                            Armenia
                          </option>
                          <option defaultValue="Aruba" data-provinces="[]">
                            Aruba
                          </option>
                          <option defaultValue="Austria" data-provinces="[]">
                            Austria
                          </option>
                          <option defaultValue="Azerbaijan" data-provinces="[]">
                            Azerbaijan
                          </option>
                          <option defaultValue="Bahamas" data-provinces="[]">
                            Bahamas
                          </option>
                          <option defaultValue="Bahrain" data-provinces="[]">
                            Bahrain
                          </option>
                          <option defaultValue="Bangladesh" data-provinces="[]">
                            Bangladesh
                          </option>
                          <option defaultValue="Barbados" data-provinces="[]">
                            Barbados
                          </option>
                          <option defaultValue="Belarus" data-provinces="[]">
                            Belarus
                          </option>
                          <option defaultValue="Belgium" data-provinces="[]">
                            Belgium
                          </option>
                          <option defaultValue="Belize" data-provinces="[]">
                            Belize
                          </option>
                          <option defaultValue="Benin" data-provinces="[]">
                            Benin
                          </option>
                          <option defaultValue="Bermuda" data-provinces="[]">
                            Bermuda
                          </option>
                          <option defaultValue="Bhutan" data-provinces="[]">
                            Bhutan
                          </option>
                          <option defaultValue="Bolivia" data-provinces="[]">
                            Bolivia
                          </option>
                          <option
                            defaultValue="Bosnia And Herzegovina"
                            data-provinces="[]"
                          >
                            Bosnia &amp; Herzegovina
                          </option>
                          <option defaultValue="Botswana" data-provinces="[]">
                            Botswana
                          </option>
                          <option
                            defaultValue="Bouvet Island"
                            data-provinces="[]"
                          >
                            Bouvet Island
                          </option>
                          <option
                            defaultValue="British Indian Ocean Territory"
                            data-provinces="[]"
                          >
                            British Indian Ocean Territory
                          </option>
                          <option
                            defaultValue="Virgin Islands, British"
                            data-provinces="[]"
                          >
                            British Virgin Islands
                          </option>
                          <option defaultValue="Brunei" data-provinces="[]">
                            Brunei
                          </option>
                          <option defaultValue="Bulgaria" data-provinces="[]">
                            Bulgaria
                          </option>
                          <option
                            defaultValue="Burkina Faso"
                            data-provinces="[]"
                          >
                            Burkina Faso
                          </option>
                          <option defaultValue="Burundi" data-provinces="[]">
                            Burundi
                          </option>
                          <option defaultValue="Cambodia" data-provinces="[]">
                            Cambodia
                          </option>
                          <option
                            defaultValue="Republic of Cameroon"
                            data-provinces="[]"
                          >
                            Cameroon
                          </option>
                          <option defaultValue="Cape Verde" data-provinces="[]">
                            Cape Verde
                          </option>
                          <option
                            defaultValue="Bonaire, Sint Eustatius and Saba"
                            data-provinces="[]"
                          >
                            Caribbean Netherlands
                          </option>
                          <option
                            defaultValue="Cayman Islands"
                            data-provinces="[]"
                          >
                            Cayman Islands
                          </option>
                          <option
                            defaultValue="Central African Republic"
                            data-provinces="[]"
                          >
                            Central African Republic
                          </option>
                          <option defaultValue="Chad" data-provinces="[]">
                            Chad
                          </option>
                          <option defaultValue="Chile" data-provinces="[]">
                            Chile
                          </option>
                          <option defaultValue="Comoros" data-provinces="[]">
                            Comoros
                          </option>
                          <option defaultValue="Congo" data-provinces="[]">
                            Congo - Brazzaville
                          </option>
                          <option
                            defaultValue="Congo, The Democratic Republic Of The"
                            data-provinces="[]"
                          >
                            Congo - Kinshasa
                          </option>
                          <option
                            defaultValue="Cook Islands"
                            data-provinces="[]"
                          >
                            Cook Islands
                          </option>
                          <option defaultValue="Costa Rica" data-provinces="[]">
                            Costa Rica
                          </option>
                          <option defaultValue="Croatia" data-provinces="[]">
                            Croatia
                          </option>
                          <option defaultValue="Cuba" data-provinces="[]">
                            Cuba
                          </option>
                          <option defaultValue="Curaçao" data-provinces="[]">
                            Curaçao
                          </option>
                          <option defaultValue="Cyprus" data-provinces="[]">
                            Cyprus
                          </option>
                          <option
                            defaultValue="Czech Republic"
                            data-provinces="[]"
                          >
                            Czech Republic
                          </option>
                          <option
                            defaultValue="Côte d'Ivoire"
                            data-provinces="[]"
                          >
                            Côte d'Ivoire
                          </option>
                          <option defaultValue="Denmark" data-provinces="[]">
                            Denmark
                          </option>
                          <option defaultValue="Djibouti" data-provinces="[]">
                            Djibouti
                          </option>
                          <option defaultValue="Dominica" data-provinces="[]">
                            Dominica
                          </option>
                          <option
                            defaultValue="Dominican Republic"
                            data-provinces="[]"
                          >
                            Dominican Republic
                          </option>
                          <option defaultValue="Finland" data-provinces="[]">
                            Finland
                          </option>
                          <option defaultValue="France" data-provinces="[]">
                            France
                          </option>
                          <option
                            defaultValue="French Guiana"
                            data-provinces="[]"
                          >
                            French Guiana
                          </option>
                          <option
                            defaultValue="French Polynesia"
                            data-provinces="[]"
                          >
                            French Polynesia
                          </option>
                          <option
                            defaultValue="French Southern Territories"
                            data-provinces="[]"
                          >
                            French Southern Territories
                          </option>
                          <option defaultValue="Gabon" data-provinces="[]">
                            Gabon
                          </option>
                          <option defaultValue="Gambia" data-provinces="[]">
                            Gambia
                          </option>
                          <option defaultValue="Georgia" data-provinces="[]">
                            Georgia
                          </option>
                          <option defaultValue="Germany" data-provinces="[]">
                            Germany
                          </option>
                          <option defaultValue="Ghana" data-provinces="[]">
                            Ghana
                          </option>
                          <option defaultValue="Gibraltar" data-provinces="[]">
                            Gibraltar
                          </option>
                          <option defaultValue="Greece" data-provinces="[]">
                            Greece
                          </option>
                          <option defaultValue="Greenland" data-provinces="[]">
                            Greenland
                          </option>
                          <option defaultValue="Jersey" data-provinces="[]">
                            Jersey
                          </option>
                          <option defaultValue="Jordan" data-provinces="[]">
                            Jordan
                          </option>
                          <option defaultValue="Kazakhstan" data-provinces="[]">
                            Kazakhstan
                          </option>
                          <option defaultValue="Kenya" data-provinces="[]">
                            Kenya
                          </option>
                          <option defaultValue="Kiribati" data-provinces="[]">
                            Kiribati
                          </option>
                          <option defaultValue="Kosovo" data-provinces="[]">
                            Kosovo
                          </option>
                          <option defaultValue="Kuwait" data-provinces="[]">
                            Kuwait
                          </option>
                          <option defaultValue="Kyrgyzstan" data-provinces="[]">
                            Kyrgyzstan
                          </option>
                          <option
                            defaultValue="Lao People's Democratic Republic"
                            data-provinces="[]"
                          >
                            Laos
                          </option>
                          <option defaultValue="Latvia" data-provinces="[]">
                            Latvia
                          </option>
                          <option defaultValue="Lebanon" data-provinces="[]">
                            Lebanon
                          </option>
                          <option defaultValue="Lesotho" data-provinces="[]">
                            Lesotho
                          </option>
                          <option defaultValue="Liberia" data-provinces="[]">
                            Liberia
                          </option>
                          <option
                            defaultValue="Libyan Arab Jamahiriya"
                            data-provinces="[]"
                          >
                            Libya
                          </option>
                          <option
                            defaultValue="Liechtenstein"
                            data-provinces="[]"
                          >
                            Liechtenstein
                          </option>
                          <option defaultValue="Lithuania" data-provinces="[]">
                            Lithuania
                          </option>
                          <option defaultValue="Luxembourg" data-provinces="[]">
                            Luxembourg
                          </option>
                          <option defaultValue="Macao" data-provinces="[]">
                            Macau SAR China
                          </option>
                          <option
                            defaultValue="Macedonia, Republic Of"
                            data-provinces="[]"
                          >
                            Macedonia
                          </option>
                          <option defaultValue="Madagascar" data-provinces="[]">
                            Madagascar
                          </option>
                          <option defaultValue="Malawi" data-provinces="[]">
                            Malawi
                          </option>
                          <option defaultValue="Monaco" data-provinces="[]">
                            Monaco
                          </option>
                          <option defaultValue="Mongolia" data-provinces="[]">
                            Mongolia
                          </option>
                          <option defaultValue="Montenegro" data-provinces="[]">
                            Montenegro
                          </option>
                          <option defaultValue="Montserrat" data-provinces="[]">
                            Montserrat
                          </option>
                          <option defaultValue="Morocco" data-provinces="[]">
                            Morocco
                          </option>
                          <option defaultValue="Mozambique" data-provinces="[]">
                            Mozambique
                          </option>
                          <option defaultValue="Myanmar" data-provinces="[]">
                            Myanmar (Burma)
                          </option>
                          <option defaultValue="Namibia" data-provinces="[]">
                            Namibia
                          </option>
                          <option defaultValue="Nauru" data-provinces="[]">
                            Nauru
                          </option>
                          <option defaultValue="Nepal" data-provinces="[]">
                            Nepal
                          </option>
                          <option
                            defaultValue="Netherlands"
                            data-provinces="[]"
                          >
                            Netherlands
                          </option>
                          <option defaultValue="Samoa" data-provinces="[]">
                            Samoa
                          </option>
                          <option defaultValue="San Marino" data-provinces="[]">
                            San Marino
                          </option>
                          <option
                            defaultValue="Sao Tome And Principe"
                            data-provinces="[]"
                          >
                            São Tomé &amp; Príncipe
                          </option>
                          <option
                            defaultValue="Saudi Arabia"
                            data-provinces="[]"
                          >
                            Saudi Arabia
                          </option>
                          <option defaultValue="Senegal" data-provinces="[]">
                            Senegal
                          </option>
                          <option defaultValue="Serbia" data-provinces="[]">
                            Serbia
                          </option>
                          <option defaultValue="Seychelles" data-provinces="[]">
                            Seychelles
                          </option>
                          <option
                            defaultValue="Sierra Leone"
                            data-provinces="[]"
                          >
                            Sierra Leone
                          </option>
                          <option defaultValue="Singapore" data-provinces="[]">
                            Singapore
                          </option>
                          <option
                            defaultValue="Sint Maarten"
                            data-provinces="[]"
                          >
                            Sint Marteen
                          </option>
                          <option defaultValue="Slovakia" data-provinces="[]">
                            Slovakia
                          </option>
                          <option defaultValue="Slovenia" data-provinces="[]">
                            Slovenia
                          </option>
                          <option
                            defaultValue="Solomon Islands"
                            data-provinces="[]"
                          >
                            Solomon Islands
                          </option>
                          <option defaultValue="Sri Lanka" data-provinces="[]">
                            Sri Lanka
                          </option>
                          <option
                            defaultValue="Saint Barthélemy"
                            data-provinces="[]"
                          >
                            St. Barthélemy
                          </option>
                          <option
                            defaultValue="Saint Helena"
                            data-provinces="[]"
                          >
                            St. Helena
                          </option>
                          <option
                            defaultValue="Saint Kitts And Nevis"
                            data-provinces="[]"
                          >
                            St. Kitts &amp; Nevis
                          </option>
                          <option
                            defaultValue="Saint Lucia"
                            data-provinces="[]"
                          >
                            St. Lucia
                          </option>
                          <option
                            defaultValue="Saint Martin"
                            data-provinces="[]"
                          >
                            St. Martin
                          </option>
                          <option
                            defaultValue="Saint Pierre And Miquelon"
                            data-provinces="[]"
                          >
                            St. Pierre &amp; Miquelon
                          </option>
                          <option
                            defaultValue="St. Vincent"
                            data-provinces="[]"
                          >
                            St. Vincent &amp; Grenadines
                          </option>
                          <option defaultValue="Sudan" data-provinces="[]">
                            Sudan
                          </option>
                          <option defaultValue="Suriname" data-provinces="[]">
                            Suriname
                          </option>
                          <option
                            defaultValue="Svalbard And Jan Mayen"
                            data-provinces="[]"
                          >
                            Svalbard &amp; Jan Mayen
                          </option>
                          <option defaultValue="Swaziland" data-provinces="[]">
                            Swaziland
                          </option>
                          <option defaultValue="Sweden" data-provinces="[]">
                            Sweden
                          </option>
                          <option
                            defaultValue="Switzerland"
                            data-provinces="[]"
                          >
                            Switzerland
                          </option>
                          <option defaultValue="Syria" data-provinces="[]">
                            Syria
                          </option>
                          <option defaultValue="Taiwan" data-provinces="[]">
                            Taiwan
                          </option>
                          <option defaultValue="Tajikistan" data-provinces="[]">
                            Tajikistan
                          </option>
                          <option
                            defaultValue="Timor Leste"
                            data-provinces="[]"
                          >
                            Timor-Leste
                          </option>
                          <option defaultValue="Togo" data-provinces="[]">
                            Togo
                          </option>
                          <option defaultValue="Tokelau" data-provinces="[]">
                            Tokelau
                          </option>
                          <option defaultValue="Tonga" data-provinces="[]">
                            Tonga
                          </option>
                          <option
                            defaultValue="Trinidad and Tobago"
                            data-provinces="[]"
                          >
                            Trinidad &amp; Tobago
                          </option>
                          <option defaultValue="Tunisia" data-provinces="[]">
                            Tunisia
                          </option>
                          <option defaultValue="Turkey" data-provinces="[]">
                            Turkey
                          </option>
                          <option
                            defaultValue="Turkmenistan"
                            data-provinces="[]"
                          >
                            Turkmenistan
                          </option>
                          <option
                            defaultValue="Turks and Caicos Islands"
                            data-provinces="[]"
                          >
                            Turks &amp; Caicos Islands
                          </option>
                          <option defaultValue="Tuvalu" data-provinces="[]">
                            Tuvalu
                          </option>
                          <option
                            defaultValue="United States Minor Outlying Islands"
                            data-provinces="[]"
                          >
                            U.S. Outlying Islands
                          </option>
                          <option defaultValue="Uganda" data-provinces="[]">
                            Uganda
                          </option>
                          <option defaultValue="Ukraine" data-provinces="[]">
                            Ukraine
                          </option>
                          <option defaultValue="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option
                            defaultValue="United Kingdom"
                            data-provinces="[]"
                          >
                            United Kingdom
                          </option>
                          <option defaultValue="United States">
                            United States
                          </option>
                          <option defaultValue="Uruguay" data-provinces="[]">
                            Uruguay
                          </option>
                          <option defaultValue="Uzbekistan" data-provinces="[]">
                            Uzbekistan
                          </option>
                          <option defaultValue="Vanuatu" data-provinces="[]">
                            Vanuatu
                          </option>
                          <option
                            defaultValue="Holy See (Vatican City State)"
                            data-provinces="[]"
                          >
                            Vatican City
                          </option>
                          <option defaultValue="Venezuela" data-provinces="[]">
                            Venezuela
                          </option>
                          <option defaultValue="Vietnam" data-provinces="[]">
                            Vietnam
                          </option>
                          <option
                            defaultValue="Wallis And Futuna"
                            data-provinces="[]"
                          >
                            Wallis &amp; Futuna
                          </option>
                          <option
                            defaultValue="Western Sahara"
                            data-provinces="[]"
                          >
                            Western Sahara
                          </option>
                          <option defaultValue="Yemen" data-provinces="[]">
                            Yemen
                          </option>
                          <option defaultValue="Zambia" data-provinces="[]">
                            Zambia
                          </option>
                          <option defaultValue="Zimbabwe" data-provinces="[]">
                            Zimbabwe
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>State</label>
                        <select
                          id="address_province"
                          name="address[province]"
                          data-default=""
                        >
                          <option defaultValue="Alabama">Alabama</option>
                          <option defaultValue="Alaska">Alaska</option>
                          <option defaultValue="American Samoa">
                            American Samoa
                          </option>
                          <option defaultValue="Arizona">Arizona</option>
                          <option defaultValue="Arkansas">Arkansas</option>
                          <option defaultValue="California">California</option>
                          <option defaultValue="Colorado">Colorado</option>
                          <option defaultValue="Connecticut">
                            Connecticut
                          </option>
                          <option defaultValue="Delaware">Delaware</option>
                          <option defaultValue="District of Columbia">
                            District of Columbia
                          </option>
                          <option defaultValue="Federated States of Micronesia">
                            Federated States of Micronesia
                          </option>
                          <option defaultValue="Florida">Florida</option>
                          <option defaultValue="Georgia">Georgia</option>
                          <option defaultValue="Guam">Guam</option>
                          <option defaultValue="Hawaii">Hawaii</option>
                          <option defaultValue="Idaho">Idaho</option>
                          <option defaultValue="Illinois">Illinois</option>
                          <option defaultValue="Indiana">Indiana</option>
                          <option defaultValue="Iowa">Iowa</option>
                          <option defaultValue="Kansas">Kansas</option>
                          <option defaultValue="Kentucky">Kentucky</option>
                          <option defaultValue="Louisiana">Louisiana</option>
                          <option defaultValue="Maine">Maine</option>
                          <option defaultValue="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option defaultValue="Maryland">Maryland</option>
                          <option defaultValue="Massachusetts">
                            Massachusetts
                          </option>
                          <option defaultValue="Michigan">Michigan</option>
                          <option defaultValue="Minnesota">Minnesota</option>
                          <option defaultValue="Mississippi">
                            Mississippi
                          </option>
                          <option defaultValue="Missouri">Missouri</option>
                          <option defaultValue="Montana">Montana</option>
                          <option defaultValue="Nebraska">Nebraska</option>
                          <option defaultValue="Nevada">Nevada</option>
                          <option defaultValue="New Hampshire">
                            New Hampshire
                          </option>
                          <option defaultValue="New Jersey">New Jersey</option>
                          <option defaultValue="New Mexico">New Mexico</option>
                          <option defaultValue="New York">New York</option>
                          <option defaultValue="North Carolina">
                            North Carolina
                          </option>
                          <option defaultValue="North Dakota">
                            North Dakota
                          </option>
                          <option defaultValue="Northern Mariana Islands">
                            Northern Mariana Islands
                          </option>
                          <option defaultValue="Ohio">Ohio</option>
                          <option defaultValue="Oklahoma">Oklahoma</option>
                          <option defaultValue="Oregon">Oregon</option>
                          <option defaultValue="Palau">Palau</option>
                          <option defaultValue="Pennsylvania">
                            Pennsylvania
                          </option>
                          <option defaultValue="Puerto Rico">
                            Puerto Rico
                          </option>
                          <option defaultValue="Rhode Island">
                            Rhode Island
                          </option>
                          <option defaultValue="South Carolina">
                            South Carolina
                          </option>
                          <option defaultValue="South Dakota">
                            South Dakota
                          </option>
                          <option defaultValue="Tennessee">Tennessee</option>
                          <option defaultValue="Texas">Texas</option>
                          <option defaultValue="Utah">Utah</option>
                          <option defaultValue="Vermont">Vermont</option>
                          <option defaultValue="Virgin Islands">
                            Virgin Islands
                          </option>
                          <option defaultValue="Virginia">Virginia</option>
                          <option defaultValue="Washington">Washington</option>
                          <option defaultValue="West Virginia">
                            West Virginia
                          </option>
                          <option defaultValue="Wisconsin">Wisconsin</option>
                          <option defaultValue="Wyoming">Wyoming</option>
                          <option defaultValue="Armed Forces Americas">
                            Armed Forces Americas
                          </option>
                          <option defaultValue="Armed Forces Europe">
                            Armed Forces Europe
                          </option>
                          <option defaultValue="Armed Forces Pacific">
                            Armed Forces Pacific
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address_zip">Postal/Zip Code</label>
                        <input
                          type="text"
                          id="address_zip"
                          name="address[zip]"
                        />
                      </div>

                      <div className="actionRow">
                        <div>
                          <input
                            type="button"
                            className="btn btn-secondary btn--small"
                            defaultValue="Calculate shipping"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
                    <div className="solid-border">
                      <div className="row border-bottom pb-2">
                        <span className="col-12 col-sm-6 cart__subtotal-title">
                          Subtotal
                        </span>
                        <span className="col-12 col-sm-6 text-right">
                          <span className="money">$735.00</span>
                        </span>
                      </div>
                      <div className="row border-bottom pb-2 pt-2">
                        <span className="col-12 col-sm-6 cart__subtotal-title">
                          Tax
                        </span>
                        <span className="col-12 col-sm-6 text-right">
                          $10.00
                        </span>
                      </div>
                      <div className="row border-bottom pb-2 pt-2">
                        <span className="col-12 col-sm-6 cart__subtotal-title">
                          Shipping
                        </span>
                        <span className="col-12 col-sm-6 text-right">
                          Free shipping
                        </span>
                      </div>
                      <div className="row border-bottom pb-2 pt-2">
                        <span className="col-12 col-sm-6 cart__subtotal-title">
                          <strong>Grand Total</strong>
                        </span>
                        <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                          <span className="money">$1001.00</span>
                        </span>
                      </div>
                      <div className="cart__shipping">
                        Shipping &amp; taxes calculated at checkout
                      </div>
                      <p className="cart_tearm">
                        <label>
                          <input
                            type="checkbox"
                            name="tearm"
                            className="checkbox"
                            defaultValue="tearm"
                            required=""
                          />
                          I agree with the terms and conditions
                        </label>
                      </p>
                      <input
                        type="submit"
                        name="checkout"
                        id="cartCheckout"
                        className="btn btn--small-wide checkout"
                        defaultValue="Proceed To Checkout"
                        disabled="disabled"
                      />
                      <div className="paymnet-img">
                        <img
                          src="assets/images/payment-img.jpg"
                          alt="Payment"
                        />
                      </div>
                      <p>
                        <a href="#;">Checkout with Multiple Addresses</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Cart;
