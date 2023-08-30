import React from 'react'

const SingleBlog = () => {
  return (
    <div id="page-content">
    	<div className="page section-header text-center mb-0">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Blog Article</h1></div>
      		</div>
		</div>
	    <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
                <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span>
                <a href="blog-left-sidebar.html" title="Back to News">News</a><span aria-hidden="true">›</span><span>Blog Article</span>
            </div>
        </div>
        <div className="container">
        	<div className="row">
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                    <div className="blog--list-view">
                    	<div className="article"> 
                             <a className="article_featured-image" href="#"><img className="blur-up lazyload" data-src="assets/images/blog/blog-post-1.jpg" src="assets/images/blog/blog-post-1.jpg" alt="It's all about how you wear"/></a> 
                            <h1><a href="blog-left-sidebar.html">It's all about how you wear</a></h1>
                            <ul className="publish-detail">                      
                                <li><i className="anm anm-user-al" aria-hidden="true"></i>  User</li>
                                <li><i className="icon anm anm-clock-r"></i> <time dateTime="2017-05-02">May 02, 2017</time></li>
                                <li>
                                    <ul className="inline-list">   
                                        <li><i className="icon anm anm-comments-l"></i> <a href="#"> 0 comments</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="rte"> 
                                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h3>Sample Text Listing</h3>
                                <ul className="list-items">
                                	<li>Donec et lacus mattis ipsum feugiat interdum non id sapien.</li>
                                    <li>Quisque et mauris eget nisi vestibulum rhoncus molestie a ante.</li>
                                    <li>Curabitur pulvinar ex at tempus sodales.</li>
                                    <li>Mauris efficitur magna quis lectus lobortis venenatis.</li>
                                    <li>Nunc id enim eget augue molestie lobortis in a purus.</li>
                                </ul>
                                <h3>Donec maximus quam at lectus bibendum, non suscipit nunc tristique.</h3>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                            <hr/>
                            <div className="social-sharing">
                                <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" title="Share on Facebook">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Share</span>
                                </a>
                                <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" title="Tweet on Twitter">
                                    <i className="fa fa-twitter" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Tweet</span>
                                </a>
                                <a href="#" title="Share on google+" className="btn btn--small btn--secondary btn--share" >
                                    <i className="fa fa-google-plus" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Google+</span>
                                </a>
                                <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" title="Pin on Pinterest">
                                    <i className="fa fa-pinterest" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Pin it</span>
                                </a>
                                <a href="#" className="btn btn--small btn--secondary btn--share share-pinterest" title="Share by Email" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Email</span>
                                </a>
                            </div>
                            <div className="blog-nav">
                            	<div className="text-left">
                                	<i className="icon icon-arrow-circle-left"></i>
                                    <a href="#" title="">Previous</a>
                                </div>
                                <div className="text-right">
                                    <a href="#" title="">Next</a>
                                    <i className="icon icon-arrow-circle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="formFeilds contact-form form-vertical">
                          <form method="post" action="#" id="comment_form" acceptCharset="UTF-8" className="comment-form">
                              <h2>Leave a comment</h2>
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                    <input type="text" id="ContactFormName" name="contact[name]" placeholder="Name" defaultValue="" required=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                    <input type="email" id="ContactFormEmail" name="contact[email]" placeholder="Email" defaultValue="" required=""/>                        	
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                    <textarea required="" rows="10" id="ContactFormMessage" name="contact[body]" placeholder="Your Message"></textarea>
                                    </div>
                                </div>  
                              </div>
                              <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <p className="fine-print">Please note, comments must be approved before they are published</p>
                                    <input type="submit" className="btn" defaultValue="Send Message"/>
                                </div>
                             </div>
                         </form>
                        </div>
                    </div>
                </div>
            	<div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar">
                	<div className="sidebar_tags">
                    	<div className="sidebar_widget categories">
                            <div className="widget-title"><h2>Category</h2></div>
                            <div className="widget-content">
                                <ul className="sidebar_categories">
                                	<li className="lvl-1 "><a href="http://annimexweb.com/" className="site-nav lvl-1">Beauty</a></li>
                                    <li className="lvl-1  active"><a href="#" className="site-nav lvl-1">fashion</a></li>
                                    <li className="lvl-1 "><a href="#" className="site-nav lvl-1">summer</a></li>
                                    <li className="lvl-1 "><a href="#" className="site-nav lvl-1">trend</a></li>
                                    <li className="lvl-1 "><a href="#" className="site-nav lvl-1">winter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar_widget">
                        	<div className="widget-title"><h2>Recent Posts</h2></div>
							<div className="widget-content">
                                <div className="list list-sidebar-products">
                                  <div className="grid">
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image">
                                            <a className="grid-view-item__link" href="#">
                                                <img className="grid-view-item__image blur-up lazyload" data-src="assets/images/blog/blog-post-sml-1.jpg" src="assets/images/blog/blog-post-sml-1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">It's all about how you wear</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:33:00Z">May 02, 2017</time></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/blog/blog-post-sml-2.jpg" src="assets/images/blog/blog-post-sml-2.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">27 Days of Spring Fashion Recap</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:33:00Z">May 02, 2017</time> </span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/blog/blog-post-sml-3.jpg" src="assets/images/blog/blog-post-sml-3.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">How to Wear The Folds Trend Four Ways</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:14:00Z">May 02, 2017</time> </span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/blog/blog-post-sml-4.jpg" src="assets/images/blog/blog-post-sml-4.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Accusantium doloremque</a>
                                          <div className="grid-view-item__meta"><span className="article__date"> <time dateTime="2017-05-02T14:12:00Z">May 02, 2017</time> </span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                        <div className="sidebar_widget static-banner">
                        	<img src="assets/images/side-banner-2.jpg" alt=""/>
                        </div>
						<div className="sidebar_widget">
                        	<div className="widget-title"><h2>Trending Now</h2></div>
							<div className="widget-content">
                                <div className="list list-sidebar-products">
                                  <div className="grid">
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image">
                                            <a className="grid-view-item__link" href="#">
                                                <img className="grid-view-item__image blur-up lazyload" data-src="assets/images/product-images/mini-product-img.jpg" src="assets/images/product-images/mini-product-img.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Cena Skirt</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$173.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/product-images/mini-product-img1.jpg" src="assets/images/product-images/mini-product-img1.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Block Button Up</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$378.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/product-images/mini-product-img2.jpg" src="assets/images/product-images/mini-product-img2.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Balda Button Pant</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$278.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image blur-up lazyload" data-src="assets/images/product-images/mini-product-img3.jpg" src="assets/images/product-images/mini-product-img3.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Border Dress in Black/Silver</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$228.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SingleBlog
