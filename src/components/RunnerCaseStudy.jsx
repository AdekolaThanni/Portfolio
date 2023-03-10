import React from "react";
import { useSelector } from "react-redux";
import ProjectCaseStudy from "./ProjectCaseStudy";
import Image from "./Image";

function RunnerCaseStudy() {
  const { project } = useSelector((state) => state.caseStudyReducer);
  const tools = useSelector((state) => state.toolsReducer);

  return (
    <ProjectCaseStudy visible={project?.name === "Runner"}>
      {/* Title */}
      <h2 className="text-[4rem] flex items-center gap-[2rem] text-[#8a7350] font-bold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g fill="#8a7350">
            <path d="M6.835 5.092v2.777h1.549c.995 0 1.573-.463 1.573-1.36c0-.913-.596-1.417-1.537-1.417H6.835Z" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46c0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5V4.002Z" />
          </g>
        </svg>
        Runner
      </h2>

      {/* Overview to explain what project accomplishes*/}
      <p className="mt-[2rem] mb-[6rem] indent-[3rem]">
        This is an e-commerce application or platform that allows the activity
        of buying products through the internet using computers or mobile
        devices. The application provides a way of transferring money between
        customers and the e-commerce platform through the use of a secure
        payment gateway system.
        <span className="indent-[3rem] block">
          The products being sold on the platform are mainly shoes with varying
          brands meant for any type of occasion. From sport shoes to casual ones
          to ones meant to impress a date. Accessing shoes you aim for has been
          simplified on the application by integrating filters and search
          features to save your time, and sometimes when you feel you need to
          save the shoe for a future purpose, you can add them to your wishlist.
        </span>
      </p>

      {/* Live app link */}
      <h3 className="text-[2rem] text-[#8a7350] block">Live App link</h3>
      <a
        href={project?.appRepositoryLink}
        className="hover:opacity-70"
        target="_blank"
        rel="noreferrer"
      >
        {project?.appRepositoryLink}
      </a>
      {/* Repository link */}
      <h3 className="text-[2rem] text-[#8a7350] block mt-[2rem]">
        Repository link
      </h3>
      <a
        href={project?.appRepositoryLink}
        className="hover:opacity-70"
        target="_blank"
        rel="noreferrer"
      >
        {project?.appRepositoryLink}
      </a>

      <h3 className="text-[2rem] text-[#8a7350] mb-[1.5rem] mt-[6rem] block">
        Visual overview of the app
      </h3>
      <video
        src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1678381532/Portfolio/Runner/Runner_Edited_avlvii.mp4"
        className="w-full rounded-3xl object-top"
        autoPlay
        controls
        controlsList="nodownload"
      />

      {/* Features */}
      <h3 className="text-[2rem] text-[#8a7350] mb-[1.5rem] mt-[6rem] block">
        Features
      </h3>
      <ul className="list-disc list-inside space-y-[5rem] pt-[2rem]">
        {/* Product Item */}
        <li className="">
          <h4 className="inline-block font-semibold">Product Item</h4>
          <div className="mt-[1rem]">
            This is a feature implemented to show customers summary of a product
            like price, rating, and a snapshot of product, this was achievable
            using <span className="text-[#8a7350]">React</span> and{" "}
            <span className="text-[#8a7350]">server API</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384517/Portfolio/Runner/Product_Item_d5y1ii.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Filter & Sorting */}
        <li className="">
          <h4 className="inline-block font-semibold">Filter & Sorting</h4>
          <div className="mt-[1rem]">
            Filter & Sorting feature was implemented so customers can pick out
            products faster based on price ranges, their favorite brands and
            other parameters, this was achievable using{" "}
            <span className="text-[#8a7350]">URLSearchParams browser API</span>{" "}
            to modify request to the{" "}
            <span className="text-[#8a7350]">server API</span> while using
            <span className="text-[#8a7350]">React Router library</span> to fake
            route change in browser url bar since the application was Client
            Side Rendered.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384516/Portfolio/Runner/Filters_Sorts_aftcye.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Search bar*/}
        <li className="">
          <h4 className="inline-block font-semibold">Search bar</h4>
          <div className="mt-[1rem]">
            The search bar feature was integrated for the same reason above but
            just to allow customers versatility when searching for products like
            "Leather shoes", "Rubber shoes". This feature was implemented using{" "}
            <span className="text-[#8a7350]">URLSearchParams browser API</span>{" "}
            to modify request to the{" "}
            <span className="text-[#8a7350]">server API</span> while using{" "}
            <span className="text-[#8a7350]">React Router library</span> to fake
            route change in browser url bar since the application was Client
            Side Rendered.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384517/Portfolio/Runner/Search_bar_sqvcdg.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Product Gallery */}
        <li className="">
          <h4 className="inline-block font-semibold">Product Gallery</h4>
          <div className="mt-[1rem]">
            This features allows customers to see multiple images of a product
            from different angles in order to get full detail of how product
            looks, this was made possible with{" "}
            <span className="text-[#8a7350]">React</span> to render components
            dynamically
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384516/Portfolio/Runner/Product_Gallery_vbaa1x.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Product Image Inspector */}
        <li className="">
          <h4 className="inline-block font-semibold">
            Product Image Inspector
          </h4>
          <div className="mt-[1rem]">
            The Product Image Inspector was integrated to allow customers to
            zoom in on products to optimize their experience with the product
            before deciding to buy, this was possible with{" "}
            <span className="text-[#8a7350]">
              React Image Magnifier library
            </span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384518/Portfolio/Runner/Product_Inspector_yanerx.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Product Detail */}
        <li className="">
          <h4 className="inline-block font-semibold">Product Detail</h4>
          <div className="mt-[1rem]">
            This was added so customers can know more about product, like its
            origin and features
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678387541/Portfolio/Runner/Product_detail_kgyf2n.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Product Reviews */}
        <li className="">
          <h4 className="inline-block font-semibold">Product Reviews</h4>
          <div className="mt-[1rem]">
            This is a feature required so customers can read up on reviews from
            other customers that purchased the same product, it allows customers
            to sort reviews based on timeline or rating received, this was
            developed using the{" "}
            <span className="text-[#8a7350]">server API</span> to request for
            product reviews and <span className="text-[#8a7350]">React</span> to
            display reviews
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384517/Portfolio/Runner/Reviews_s9ptjb.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Write Review */}
        <li className="">
          <h4 className="inline-block font-semibold">Write Review</h4>
          <div className="mt-[1rem]">
            This allows customers to write review on a product after purchase of
            the product, this developed using{" "}
            <span className="text-[#8a7350]">React</span> to render form modal
            dynamically and <span className="text-[#8a7350]">server API</span>{" "}
            to store the customer review.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384517/Portfolio/Runner/Write_review_feature_mqc8ug.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Add Product To Wishlist */}
        <li className="">
          <h4 className="inline-block font-semibold">
            Add Product To Wishlist
          </h4>
          <div className="mt-[1rem]">
            Add to wishlist feature enables customers to store products they
            would like to buy in the future, this feature is only accessible to
            registered customers, this was developed using the{" "}
            <span className="text-[#8a7350]">server API</span> to verify user is
            logged in before storing new product to their wishlist and{" "}
            <span className="text-[#8a7350]">React</span> to update wishlist
            dyanmically.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384516/Portfolio/Runner/Add_to_wishlist_feature_vjrixr.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Wishlist */}
        <li className="">
          <h4 className="inline-block font-semibold">Wishlist</h4>
          <div className="mt-[1rem]">
            This shows the user all products they've added to wishlist, to allow
            user remove them from the wishlist or proceed to buy them, this was
            achieved by using <span className="text-[#8a7350]">server API</span>{" "}
            to provide customers wishlist when a request comes in and{" "}
            <span className="text-[#8a7350]">React</span> to display the
            wishlist content.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678382869/Portfolio/Runner/Runner_Wishlist_page_allqfb.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Add Product To Bag */}
        <li className="">
          <h4 className="inline-block font-semibold">Add Product To Bag</h4>
          <div className="mt-[1rem]">
            Add to bag feature allows customers to store products they want to
            buy for future checkout, this was built using{" "}
            <span className="text-[#8a7350]">React</span> to update bag
            dyanmically and the{" "}
            <span className="text-[#8a7350]">server API</span> to store bag into
            browser cookie.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384516/Portfolio/Runner/Add_to_bag_feature_fdsxej.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Bag */}
        <li className="">
          <h4 className="inline-block font-semibold">Bag</h4>
          <div className="mt-[1rem]">
            The Bag allows customers to see the products they've kept in order
            to buy, this page allows customers to make corrections to their
            order list like product quantities or even removing products from
            bag , this was integrated using the{" "}
            <span className="text-[#8a7350]">server API</span> to provide
            customers bag when a request comes in, also to make updates to
            customers bag and <span className="text-[#8a7350]">React</span> to
            display the bag content and update dynamically.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678382869/Portfolio/Runner/Runner_Bag_Page_cyf9pp.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Checkout Form */}
        <li className="">
          <h4 className="inline-block font-semibold">Checkout Form</h4>
          <div className="mt-[1rem]">
            The Checkout Form is enabled so customers can fill details of their
            address for product to be delivered to them, this was built using{" "}
            <span className="text-[#8a7350]">React</span> to display Checkout
            form dynamically.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678384516/Portfolio/Runner/Checkout_form_j48qlb.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Payment */}
        <li className="">
          <h4 className="inline-block font-semibold">Payment</h4>
          <div className="mt-[1rem]">
            Payment gateway is integrated so customers can securely pay for
            products they've added to their bag, this was built using{" "}
            <span className="text-[#8a7350]">Stripe</span> to create a fast and
            secure way to make payments.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678382871/Portfolio/Runner/Runner_Checkout_Page_taprpl.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Account */}
        <li className="">
          <h4 className="inline-block font-semibold">Account</h4>
          <div className="mt-[1rem]">
            This is the account page so registered customers can make updates to
            their account information for example their password or email
            account, this was made possible using{" "}
            <span className="text-[#8a7350]">React</span> to display customer
            account information and{" "}
            <span className="text-[#8a7350]">server API</span> to verify that
            user is logged in before rendering account information on request
            and also update account details.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678382867/Portfolio/Runner/Runner_Account_Page_i2s6rf.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
      </ul>

      {/* Tech stacks used for application */}
      <h3 className="text-[2rem] text-[#8a7350] mt-[6rem] inline-block mb-[1rem]">
        Tech stacks
      </h3>
      <p className="">
        Summary of the technological tools used to develop the app are:
      </p>
      {/* Project tools */}
      <div className="flex flex-wrap gap-[2rem] mt-[2rem]">
        {project?.tools.map((tool, index) => {
          // Get tool details
          const toolDetail = tools.find((toolData) => toolData.title === tool);

          if (!toolDetail) return undefined;

          // Get svg src
          const svgSrc = toolDetail.title
            .replaceAll(" ", "")
            .replaceAll(".", "dot")
            .toLowerCase();

          return (
            <span
              key={index}
              className="flex items-center gap-[1.5rem] bg-gray-light rounded-full px-[2rem] py-[1rem]"
            >
              <img
                src={require(`../assets/svg/${svgSrc}.svg`)}
                alt={toolDetail.title}
                className="w-[2rem] h-[2rem]"
              />
              <span
                className="text-[1.6rem]"
                style={{ color: toolDetail.colorCode }}
              >
                {toolDetail.title}
              </span>
            </span>
          );
        })}
      </div>

      {/* Requirements application fulfilled */}
      <h3 className="text-[2rem] text-[#8a7350] mt-[6rem] inline-block mb-[1rem]">
        Requirements Application Had To Fulfill
      </h3>
      <ul className="list-disc list-inside mt-[1rem] space-y-[1rem]">
        <li className="">
          Enabling authentication of customers and giving them a unique
          identifier e.g an email for their account. This is needed for the
          server to distinguish all customers and authenticate them correctly.
        </li>
        <li className="">
          Storing user credentials in order to remember their session the next
          time they visit the website. This avoids the user having to login
          everytime they visit the app.
        </li>
        <li className="">
          Ensuring cross-browser compatibility of the app. This ensures the app
          has a consisitent behaviour and outlook on all browsers be it Google
          chrome, Mozilla firefox, Internet explorer, Safari and so on.
        </li>
        <li className="">
          Ensured web application was responsive to all screen sizes to optimize
          accessibility across multiple devices.
        </li>
      </ul>
    </ProjectCaseStudy>
  );
}

export default RunnerCaseStudy;
