<template>


<div class="side-buttons">
    <a href="https://api.whatsapp.com/send?phone=923156260776"><i class="fa fa-whatsapp"></i></a>

</div>
   

<!--header start-->
<header id="masthead" class="header cmt-header-style-01">
    <!-- top_bar -->
    <div class="top_bar cmt-bgcolor-darkgrey cmt-textcolor-white clearfix">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="d-flex flex-row align-items-center justify-content-center">
                       
                        <div class="top_bar_contact_item">
                            <div class="top_bar_icon"><i class="ti ti-location-pin"></i></div>Office #7B 1st Floor Ali Arcade opp. Habib Bank 6th Road. Rawalpindi 
                        </div>
                        <div class="top_bar_contact_item ml-auto">
                            <div class="top_bar_icon"><i class="fa fa-envelope-o"></i></div><a href="mailto:yourdomain@gmail.com">ozoneoep@gmail.com</a>
                        </div>
                        <div class="top_bar_social">
                            <ul class="social-icons">
                                <li class="linkedin-icon"><a href="https://www.linkedin.com/in/ozone-manpower-33a560217/"><i class="ti ti-linkedin"></i></a>
                                </li>
                                <li class="google-icon"><a href="https://mail.google.com/mail/u/3/#inbox"><i class="ti ti-google"></i></a>
                                </li>
                                <li class="twitter-icon"><a href="#"><i class="ti ti-twitter-alt"></i></a>
                                </li>
                                <li class="facebook-icon"><a href="https://www.facebook.com/Ozone-Manpower-102513144791510/"><i class="ti ti-facebook"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="cmt-bg cmt-col-bgcolor-yes cmt-right-span cmt-bgcolor-skincolor pl-20">
                            <div class="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                            <div class="layer-content">
                                <div class="top_bar_contact_item"><div class="top_bar_icon"><i class="fa fa-phone"></i></div>+92 3076999777</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- top_bar end-->
    <!-- site-header-menu -->
    <div id="site-header-menu" class="site-header-menu cmt-bgcolor-white">
        <div class="site-header-menu-inner cmt-stickable-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!--site-navigation -->
                        <div class="site-navigation d-flex flex-row align-items-center justify-content-between">
                            <!-- site-branding -->
                            <div class="site-branding ">
                                <a class="home-link" href="index.php" title="" rel="home">
                                    <img id="logo-img" class="img-center" src="../assets/images/ozone-logo4.png" alt="logo-img">
                                </a>
                            </div><!-- site-branding end -->
                            <!-- widget-info -->
                            <div class="widget_info mr-auto">
                                <div>Ozone Manpower Overseas Employment Promoters</div>
                            </div>
                            <div class="d-flex flex-row">
                                <div class="btn-show-menu-mobile menubar menubar--squeeze" @click="toggleMenu">
                                    <span class="menubar-box">
                                        <span class="menubar-inner"></span>
                                    </span>           
                                </div>
                                <!-- menu -->
                                    <nav v-show="isMenuVisible"  class="main-menu menu-mobile" id="menu">
                                        <ul class="menu" >
                                            <li>
                                                <a href="index.php">Home</a>
                                                
                                            </li>
                                            <li class="mega-menu-item" @click="showElseSiblings">
                                                <a href="#" class="mega-menu-link">Services</a>
                                                <ul class="mega-submenu" v-show="siblingChild">
                                                    
                                                    <li><a href="medical-agency.php">Medical Recruitment</a></li>
                                                
                                                    <li><a href="industry-recuritment.php">Industry Recuritment</a></li>
                                                    <li><a href="Ozone_profile_2.9 mb.pdf">Download Profile</a></li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-item">
                                                <a href="#" class="mega-menu-link">News</a>
                                                <ul class="mega-submenu">
                                                    
                                                    <li><a href="pakistan-news.php">Pakistan Today News</a></li>
                                                    <li><a href="india-news.php">India Today News</a></li>
                                                    <li><a href="canada-news.php">Canada Today News</a></li>
                                                    <li><a href="united-kingdom-news.php">United Kingdom Today News</a></li>
                                                    <li><a href="china-news.php">China Today News</a></li>
                                                </ul>
                                            </li>

                                            <li class="mega-menu-item">
                                                <a href="#" class="mega-menu-link">Company</a>
                                                <ul class="mega-submenu">
                                                    
                                                <li>
                                                <a href="team.php">Our Team</a>
                                                
                                            </li>
                                            <li>
                                                <a href="about-us.php">About Us</a>
                                                
                                            </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact-us-1.php">Contact Us</a>
                                                
                                            </li>
                                            
                                        </ul>
                                    </nav>
                                <div class="header_extra d-flex flex-row align-items-center justify-content-end">
                                    <div class="header_search">
                                        <a href="#" class="btn-default search_btn"><i class="ti ti-search"></i></a>
                                        <div class="header_search_content">
                                            <form id="searchbox" onkeyup="myFunction()" method="get" action="#">
                                                <input class="search_query" type="text" id="search_query_top" name="s" placeholder="Enter Keyword" value="">
                                                <button type="submit" class="btn close-search"><i class="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- site-navigation end-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- site-header-menu end-->
</header>
<!--header end-->
</template>
<script>
export default {
    name: "AppHeader",
    data() {
        return {
            isMenuVisible: false,
            siblingChild: false,
        }
    },
    methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    showElseSiblings() {
        this.siblingChild = !this.siblingChild;
    }
  },
}
</script>
<style>
</style>