import Link from "next/link";
import { notFound } from "next/navigation";

import {
  categories,
  tools,
} from "@/app/data/tools";

import {
  comparisons,
} from "@/app/data/comparisons";

import {
  guides,
} from "@/app/data/guides";


const siteUrl =
  "https://northsky-reviews.vercel.app";



export async function generateStaticParams(){

  return categories.map((category)=>({

    slug: category.slug,

  }));

}




export async function generateMetadata({params}){


  const { slug } = await params;


  const category =
    categories.find(
      (item)=>item.slug === slug
    );



  if(!category){

    return {

      title:
      "Category Not Found | NorthSky Reviews",

    };

  }





  return {


    title:
    `Best ${category.name} Tools 2026 | Reviews, Rankings & Comparisons | NorthSky Reviews`,



    description:
    `Discover the best ${category.name} tools in 2026. Compare features, pricing, ratings, alternatives, and expert recommendations from NorthSky Reviews.`,



    keywords:[

      `best ${category.name} tools`,

      `${category.name} software reviews`,

      `${category.name} comparison`,

      `${category.name} alternatives`,

      `top ${category.name} software 2026`,

    ],



    robots:{

      index:true,

      follow:true,

    },



    alternates:{

      canonical:
      `${siteUrl}/categories/${category.slug}`,

    },



    openGraph:{


      title:
      `Best ${category.name} Tools 2026`,



      description:
      `NorthSky Reviews evaluates the best ${category.name} software based on features, usability, pricing, and value.`,



      url:
      `${siteUrl}/categories/${category.slug}`,



      siteName:
      "NorthSky Reviews",



      type:
      "website",

    },


  };


}






export default async function CategoryPage({params}){


  const {slug} =
    await params;



  const category =
    categories.find(
      (item)=>item.slug === slug
    );



  if(!category){

    notFound();

  }





  const categoryTools =
    tools.filter(

      (tool)=>

      tool.categorySlug === category.slug

    );





  const categoryGuides =
    guides.filter(

      (guide)=>

      guide.categorySlug === category.slug

    );





  const categoryComparisons =
    comparisons.filter(

      (item)=>

      item.categorySlug === category.slug

    );





  const featuredTools =

    [...categoryTools]

    .sort(

      (a,b)=>

      (b.rating || 0) -

      (a.rating || 0)

    )

    .slice(0,6);






  const relatedCategories =

    categories

    .filter(

      (item)=>

      item.slug !== category.slug

    )

    .slice(0,4);






  const schema = {


    "@context":
    "https://schema.org",



    "@type":
    "CollectionPage",



    name:
    `Best ${category.name} Tools 2026`,



    description:
    `NorthSky Reviews rankings and comparisons for ${category.name}.`,



    url:
    `${siteUrl}/categories/${category.slug}`,



    author:{

      "@type":
      "Organization",

      name:
      "NorthSky Reviews Team",

      url:
      `${siteUrl}/authors/northsky-team`,

    },



    breadcrumb:{

      "@type":
      "BreadcrumbList",


      itemListElement:[

        {

          "@type":
          "ListItem",

          position:1,

          name:"Home",

          item:
          siteUrl,

        },


        {

          "@type":
          "ListItem",

          position:2,

          name:"Categories",

          item:
          `${siteUrl}/categories`,

        },


        {

          "@type":
          "ListItem",

          position:3,

          name:
          category.name,

          item:
          `${siteUrl}/categories/${category.slug}`,

        },


      ],

    },



    mainEntity:{


      "@type":
      "ItemList",


      itemListElement:

      featuredTools.map((tool,index)=>(

        {

          "@type":
          "ListItem",

          position:
          index + 1,

          name:
          tool.name,

          url:
          `${siteUrl}/reviews/${tool.slug}`,

        }

      ))


    },


  };
    return (

    <main className="
      min-h-screen
      bg-white
      text-slate-900
    ">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
          JSON.stringify(schema),
        }}
      />





      {/* BREADCRUMBS */}

      <div className="
        mx-auto
        max-w-7xl
        px-6
        pt-8
        text-sm
        text-slate-500
      ">


        <Link
          href="/"
          className="hover:text-blue-600"
        >
          Home
        </Link>


        <span className="mx-2">
          /
        </span>



        <Link
          href="/categories"
          className="hover:text-blue-600"
        >
          Categories
        </Link>



        <span className="mx-2">
          /
        </span>



        <span>
          {category.name}
        </span>


      </div>







      {/* HERO */}


      <section className="
        mt-8
        bg-gradient-to-br
        from-slate-950
        via-indigo-950
        to-blue-900
        px-6
        py-24
        text-white
      ">


        <div className="
          mx-auto
          max-w-6xl
        ">



          <div className="text-6xl">

            {category.icon || "🚀"}

          </div>





          <h1 className="
            mt-6
            text-5xl
            font-black
            md:text-7xl
          ">

            Best {category.name} Tools 2026

          </h1>





          <p className="
            mt-6
            max-w-3xl
            text-xl
            leading-8
            text-slate-300
          ">

            Explore expert reviews,
            comparisons, rankings, and
            buying guides for the best
            {category.name.toLowerCase()}
            software and technology solutions.

          </p>





          <p className="
            mt-5
            text-sm
            text-slate-400
          ">

            Updated July 2026 • NorthSky Reviews Editorial Team

          </p>







          <div className="
            mt-10
            grid
            gap-5
            md:grid-cols-3
          ">



            <div className="
              rounded-3xl
              bg-white/10
              p-6
              backdrop-blur
            ">


              <p className="
                text-4xl
                font-black
              ">

                {categoryTools.length}+

              </p>



              <p className="
                mt-2
                text-slate-300
              ">

                Tools Reviewed

              </p>


            </div>







            <div className="
              rounded-3xl
              bg-white/10
              p-6
              backdrop-blur
            ">


              <p className="
                text-4xl
                font-black
              ">

                2026

              </p>



              <p className="
                mt-2
                text-slate-300
              ">

                Updated Rankings

              </p>


            </div>







            <div className="
              rounded-3xl
              bg-white/10
              p-6
              backdrop-blur
            ">


              <p className="
                text-4xl
                font-black
              ">

                ⭐

              </p>



              <p className="
                mt-2
                text-slate-300
              ">

                Expert Ratings

              </p>


            </div>



          </div>


        </div>


      </section>









      {/* FEATURED TOOLS */}


      <section className="
        mx-auto
        max-w-7xl
        px-6
        py-20
      ">



        <div className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
        ">


          <div>


            <h2 className="
              text-4xl
              font-black
            ">

              Top Rated {category.name} Tools

            </h2>



            <p className="
              mt-3
              text-slate-600
            ">

              Ranked using features,
              performance, usability,
              pricing, and overall value.

            </p>


          </div>




          <Link

            href="/all-tools"

            className="
              font-bold
              text-blue-600
              hover:underline
            "

          >

            View All Tools →

          </Link>


        </div>





        {featuredTools.length === 0 ? (


          <div className="
            mt-10
            rounded-3xl
            bg-slate-100
            p-10
            text-center
          ">


            <h3 className="
              text-2xl
              font-black
            ">

              More Reviews Coming Soon

            </h3>


            <p className="
              mt-3
              text-slate-600
            ">

              NorthSky Reviews is expanding this category.

            </p>


          </div>


        ) : (


          <div className="
            mt-10
            grid
            gap-8
            md:grid-cols-3
          ">
                        {featuredTools.map((tool,index)=>(


              <article

                key={tool.slug}

                className="
                  rounded-3xl
                  border
                  bg-white
                  p-8
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                "

              >



                <div className="
                  flex
                  items-center
                  justify-between
                ">



                  <span className="
                    rounded-full
                    bg-blue-100
                    px-3
                    py-1
                    text-sm
                    font-bold
                    text-blue-700
                  ">

                    #{index + 1}

                  </span>





                  <span className="
                    font-black
                    text-green-600
                  ">

                    ⭐ {tool.rating}/10

                  </span>


                </div>






                <h3 className="
                  mt-6
                  text-2xl
                  font-black
                ">

                  {tool.name}

                </h3>





                <p className="
                  mt-4
                  leading-7
                  text-slate-600
                ">

                  {tool.description}

                </p>






                <div className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                ">


                  {tool.tags?.slice(0,3).map((tag)=>(


                    <span

                      key={tag}

                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-bold
                        text-slate-600
                      "

                    >

                      #{tag}

                    </span>


                  ))}



                </div>







                <div className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-3
                ">




                  <Link

                    href={`/reviews/${tool.slug}`}

                    className="
                      rounded-xl
                      border
                      px-4
                      py-3
                      text-center
                      font-bold
                      hover:bg-slate-50
                    "

                  >

                    Review

                  </Link>







                  {tool.link && (


                    <a

                      href={tool.link}

                      target="_blank"

                      rel="
                      nofollow
                      sponsored
                      noopener
                      "

                      className="
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-3
                        text-center
                        font-bold
                        text-white
                        hover:bg-blue-700
                      "

                    >

                      Visit →

                    </a>


                  )}



                </div>



              </article>



            ))}



          </div>


        )}



      </section>









      {/* GUIDES */}



      {categoryGuides.length > 0 && (


        <section className="
          bg-slate-50
          px-6
          py-20
        ">



          <div className="
            mx-auto
            max-w-7xl
          ">



            <div className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            ">



              <div>


                <h2 className="
                  text-4xl
                  font-black
                ">

                  Best {category.name} Guides

                </h2>



                <p className="
                  mt-3
                  text-slate-600
                ">

                  Learn how to choose the right
                  software with NorthSky buying guides.

                </p>


              </div>




              <Link

                href="/guides"

                className="
                  font-bold
                  text-blue-600
                  hover:underline
                "

              >

                View Guides →

              </Link>



            </div>







            <div className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            ">





              {categoryGuides.slice(0,6).map((guide)=>(


                <Link

                  key={guide.slug}

                  href={`/guides/${guide.slug}`}

                  className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-sm
                    transition
                    hover:-translate-y-2
                    hover:shadow-xl
                  "

                >



                  <div className="text-3xl">

                    📚

                  </div>





                  <h3 className="
                    mt-5
                    text-xl
                    font-black
                  ">

                    {guide.title}

                  </h3>





                  <p className="
                    mt-4
                    leading-7
                    text-slate-600
                  ">

                    {guide.description}

                  </p>





                  <div className="
                    mt-6
                    font-bold
                    text-blue-600
                  ">

                    Read Guide →

                  </div>



                </Link>


              ))}



            </div>



          </div>



        </section>


      )}









      {/* COMPARISONS */}



      {categoryComparisons.length > 0 && (


        <section className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        ">



          <div className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          ">



            <div>


              <h2 className="
                text-4xl
                font-black
              ">

                Compare {category.name} Tools

              </h2>




              <p className="
                mt-3
                text-slate-600
              ">

                Compare features, pricing,
                performance, and alternatives.

              </p>


            </div>




            <Link

              href="/comparisons"

              className="
                font-bold
                text-blue-600
                hover:underline
              "

            >

              All Comparisons →

            </Link>



          </div>
                    <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          ">



            {categoryComparisons
            .slice(0,6)
            .map((item)=>(


              <Link

                key={item.slug}

                href={`/comparisons/${item.slug}`}

                className="
                  rounded-3xl
                  border
                  bg-white
                  p-8
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                "

              >



                <div className="
                  font-bold
                  text-blue-600
                ">

                  ⚖️ Comparison

                </div>





                <h3 className="
                  mt-5
                  text-xl
                  font-black
                ">

                  {item.title}

                </h3>





                <p className="
                  mt-3
                  text-slate-600
                ">

                  {item.description}

                </p>





                <div className="
                  mt-6
                  font-bold
                  text-blue-600
                ">

                  Compare Now →

                </div>



              </Link>


            ))}



          </div>



        </section>


      )}









      {/* RELATED CATEGORIES */}



      <section className="
        bg-slate-50
        px-6
        py-20
      ">


        <div className="
          mx-auto
          max-w-6xl
        ">



          <h2 className="
            text-center
            text-4xl
            font-black
          ">

            Explore More Categories

          </h2>





          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-4
          ">




            {relatedCategories.map((item)=>(


              <Link

                key={item.slug}

                href={`/categories/${item.slug}`}

                className="
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                "

              >



                <div className="text-4xl">

                  {item.icon || "🚀"}

                </div>





                <h3 className="
                  mt-4
                  font-black
                ">

                  {item.name}

                </h3>



              </Link>


            ))}



          </div>



        </div>


      </section>









      {/* TRUST SECTION */}



      <section className="
        px-6
        py-20
      ">


        <div className="
          mx-auto
          max-w-6xl
        ">


          <h2 className="
            text-center
            text-4xl
            font-black
          ">

            Why Trust NorthSky Reviews?

          </h2>





          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-4
          ">




            {[

              {
                title:"Independent Research",
                text:"We evaluate software using features, pricing, usability, and performance."
              },


              {
                title:"Real Comparisons",
                text:"We compare alternatives so readers can make informed decisions."
              },


              {
                title:"Updated Rankings",
                text:"Our rankings evolve as technology changes."
              },


              {
                title:"Editorial Standards",
                text:"Reviews follow a transparent evaluation process."
              }


            ].map((item)=>(


              <div

                key={item.title}

                className="
                  rounded-3xl
                  border
                  p-7
                "

              >


                <h3 className="
                  font-black
                ">

                  {item.title}

                </h3>



                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-600
                ">

                  {item.text}

                </p>


              </div>


            ))}



          </div>



        </div>


      </section>









      {/* FAQ */}



      <section className="
        mx-auto
        max-w-5xl
        px-6
        pb-20
      ">



        <h2 className="
          text-center
          text-4xl
          font-black
        ">

          Frequently Asked Questions

        </h2>





        <div className="
          mt-10
          space-y-5
        ">



          {[


            {

              q:
              `What are the best ${category.name} tools in 2026?`,

              a:
              `NorthSky ranks ${category.name.toLowerCase()} software based on features, pricing, usability, performance, and overall value.`

            },


            {

              q:
              `How does NorthSky review software?`,

              a:
              "Our team researches products, evaluates features, compares alternatives, and creates editorial rankings."

            },


            {

              q:
              "Are NorthSky recommendations independent?",

              a:
              "Yes. Some links may be affiliate links, but rankings are based on editorial evaluation."

            }


          ].map((item)=>(


            <div

              key={item.q}

              className="
                rounded-3xl
                border
                p-6
              "

            >


              <h3 className="
                text-lg
                font-black
              ">

                {item.q}

              </h3>



              <p className="
                mt-3
                text-slate-600
              ">

                {item.a}

              </p>


            </div>


          ))}



        </div>


      </section>









      {/* CTA */}



      <section className="
        px-6
        pb-20
      ">


        <div className="
          mx-auto
          max-w-5xl
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          p-12
          text-center
          text-white
        ">



          <h2 className="
            text-4xl
            font-black
          ">

            Find The Best {category.name} Tools

          </h2>



          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-blue-100
          ">

            Explore reviews, comparisons,
            and expert recommendations from
            NorthSky Reviews.

          </p>




          <div className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-5
          ">



            <Link

              href="/all-tools"

              className="
                rounded-xl
                bg-white
                px-8
                py-4
                font-black
                text-blue-600
              "

            >

              Browse Tools →

            </Link>





            <Link

              href="/contact"

              className="
                rounded-xl
                border
                border-white/40
                px-8
                py-4
                font-black
              "

            >

              Contact Team →

            </Link>



          </div>



        </div>


      </section>









      {/* TRANSPARENCY */}



      <section className="
        px-6
        pb-16
      ">


        <div className="
          mx-auto
          max-w-4xl
          rounded-3xl
          bg-slate-100
          p-8
          text-center
        ">


          <h3 className="
            font-black
          ">

            NorthSky Transparency

          </h3>



          <p className="
            mt-3
            text-sm
            text-slate-600
          ">

            NorthSky Reviews publishes independent
            software reviews and buying guides.
            Some links may be affiliate links,
            which help support our publication
            at no additional cost to readers.

          </p>


        </div>


      </section>





    </main>

  );

}
