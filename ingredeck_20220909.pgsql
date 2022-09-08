--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Debian 14.4-1.pgdg110+1)
-- Dumped by pg_dump version 14.4 (Debian 14.4-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cuisine; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cuisine" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."Cuisine" OWNER TO postgres;

--
-- Name: Cuisine_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cuisine_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cuisine_id_seq" OWNER TO postgres;

--
-- Name: Cuisine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cuisine_id_seq" OWNED BY public."Cuisine".id;


--
-- Name: Ingredient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ingredient" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    icon text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."Ingredient" OWNER TO postgres;

--
-- Name: IngredientCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."IngredientCategory" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."IngredientCategory" OWNER TO postgres;

--
-- Name: IngredientCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."IngredientCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IngredientCategory_id_seq" OWNER TO postgres;

--
-- Name: IngredientCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."IngredientCategory_id_seq" OWNED BY public."IngredientCategory".id;


--
-- Name: Ingredient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Ingredient_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Ingredient_id_seq" OWNER TO postgres;

--
-- Name: Ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ingredient_id_seq" OWNED BY public."Ingredient".id;


--
-- Name: Recipe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Recipe" (
    id integer NOT NULL,
    name text NOT NULL,
    "cleanName" text,
    description text,
    "durationSecond" integer DEFAULT 0 NOT NULL,
    "durationString" text NOT NULL,
    "ingredientCount" integer DEFAULT 1 NOT NULL,
    "ingredientLine" text NOT NULL,
    "ingredientLineCount" integer DEFAULT 0 NOT NULL,
    "numberOfServings" integer DEFAULT 1 NOT NULL,
    instruction text,
    "imageLink" text,
    "videoLink" text,
    calories double precision DEFAULT 0 NOT NULL,
    protein double precision DEFAULT 0 NOT NULL,
    carb double precision DEFAULT 0 NOT NULL,
    fiber double precision DEFAULT 0 NOT NULL,
    fat double precision DEFAULT 0 NOT NULL,
    sugar double precision DEFAULT 0 NOT NULL,
    cholesterol double precision DEFAULT 0 NOT NULL,
    "weightGram" double precision DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."Recipe" OWNER TO postgres;

--
-- Name: RecipeCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RecipeCategory" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."RecipeCategory" OWNER TO postgres;

--
-- Name: RecipeCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RecipeCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RecipeCategory_id_seq" OWNER TO postgres;

--
-- Name: RecipeCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RecipeCategory_id_seq" OWNED BY public."RecipeCategory".id;


--
-- Name: RecipeKeyword; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RecipeKeyword" (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone
);


ALTER TABLE public."RecipeKeyword" OWNER TO postgres;

--
-- Name: RecipeKeyword_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RecipeKeyword_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RecipeKeyword_id_seq" OWNER TO postgres;

--
-- Name: RecipeKeyword_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RecipeKeyword_id_seq" OWNED BY public."RecipeKeyword".id;


--
-- Name: Recipe_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Recipe_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Recipe_id_seq" OWNER TO postgres;

--
-- Name: Recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Recipe_id_seq" OWNED BY public."Recipe".id;


--
-- Name: _CuisineToRecipe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_CuisineToRecipe" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_CuisineToRecipe" OWNER TO postgres;

--
-- Name: _IngredientToIngredientCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_IngredientToIngredientCategory" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_IngredientToIngredientCategory" OWNER TO postgres;

--
-- Name: _IngredientToRecipe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_IngredientToRecipe" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_IngredientToRecipe" OWNER TO postgres;

--
-- Name: _RecipeToRecipeCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_RecipeToRecipeCategory" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_RecipeToRecipeCategory" OWNER TO postgres;

--
-- Name: _RecipeToRecipeKeyword; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_RecipeToRecipeKeyword" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_RecipeToRecipeKeyword" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Cuisine id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cuisine" ALTER COLUMN id SET DEFAULT nextval('public."Cuisine_id_seq"'::regclass);


--
-- Name: Ingredient id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredient" ALTER COLUMN id SET DEFAULT nextval('public."Ingredient_id_seq"'::regclass);


--
-- Name: IngredientCategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."IngredientCategory" ALTER COLUMN id SET DEFAULT nextval('public."IngredientCategory_id_seq"'::regclass);


--
-- Name: Recipe id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recipe" ALTER COLUMN id SET DEFAULT nextval('public."Recipe_id_seq"'::regclass);


--
-- Name: RecipeCategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeCategory" ALTER COLUMN id SET DEFAULT nextval('public."RecipeCategory_id_seq"'::regclass);


--
-- Name: RecipeKeyword id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeKeyword" ALTER COLUMN id SET DEFAULT nextval('public."RecipeKeyword_id_seq"'::regclass);


--
-- Data for Name: Cuisine; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cuisine" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	World	\N	2022-09-08 21:07:17.537	\N
2	Italian	\N	2022-09-08 21:07:17.537	\N
3	Spanish	\N	2022-09-08 21:07:17.538	\N
4	American	\N	2022-09-08 21:07:17.539	\N
6	Kid-Friendly	\N	2022-09-08 21:07:17.544	\N
5	Japanese	\N	2022-09-08 21:07:17.539	\N
7	Chinese	\N	2022-09-08 21:07:17.538	\N
8	Greek	\N	2022-09-08 21:07:17.546	\N
9	Mediterranean	\N	2022-09-08 21:07:17.554	\N
10	Mexican	\N	2022-09-08 21:07:17.555	\N
11	Polish	\N	2022-09-08 21:07:17.546	\N
12	Turkish	\N	2022-09-08 21:07:17.552	\N
\.


--
-- Data for Name: Ingredient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Ingredient" (id, name, description, icon, "createdAt", "updatedAt") FROM stdin;
1	All-purpose flour	\N	\N	2022-09-08 21:07:33.446	\N
2	Almond butter	\N	\N	2022-09-08 21:07:33.447	\N
3	Apple	\N	\N	2022-09-08 21:07:33.447	\N
4	Avocado	\N	\N	2022-09-08 21:07:33.447	\N
5	Baby spinach leaves	\N	\N	2022-09-08 21:07:33.448	\N
6	Avocado oil	\N	\N	2022-09-08 21:07:33.448	\N
7	Bacon	\N	\N	2022-09-08 21:07:33.453	\N
8	Baking powder	\N	\N	2022-09-08 21:07:33.461	\N
9	Baking soda	\N	\N	2022-09-08 21:07:33.461	\N
10	Basil	\N	\N	2022-09-08 21:07:33.462	\N
11	Bay leaves	\N	\N	2022-09-08 21:07:33.462	\N
12	Beef	\N	\N	2022-09-08 21:07:33.462	\N
13	Beef broth	\N	\N	2022-09-08 21:07:33.464	\N
14	Beef stew meat	\N	\N	2022-09-08 21:07:33.474	\N
15	Black pepper	\N	\N	2022-09-08 21:07:33.475	\N
16	Broccoli	\N	\N	2022-09-08 21:07:33.475	\N
17	Brown rice	\N	\N	2022-09-08 21:07:33.475	\N
18	Brown sugar	\N	\N	2022-09-08 21:07:33.476	\N
19	Butter	\N	\N	2022-09-08 21:07:33.476	\N
20	Cabbage	\N	\N	2022-09-08 21:07:33.487	\N
21	Carrots	\N	\N	2022-09-08 21:07:33.488	\N
22	Cauliflower	\N	\N	2022-09-08 21:07:33.488	\N
23	Celery	\N	\N	2022-09-08 21:07:33.488	\N
24	Chayote	\N	\N	2022-09-08 21:07:33.489	\N
25	Cheddar cheese	\N	\N	2022-09-08 21:07:33.489	\N
26	Cheese	\N	\N	2022-09-08 21:07:33.501	\N
27	Cherry tomatoes	\N	\N	2022-09-08 21:07:33.502	\N
28	Cherries	\N	\N	2022-09-08 21:07:33.506	\N
29	Chicken breasts	\N	\N	2022-09-08 21:07:33.506	\N
30	Chicken	\N	\N	2022-09-08 21:07:33.507	\N
31	Chicken broth	\N	\N	2022-09-08 21:07:33.507	\N
32	Chicken thighs	\N	\N	2022-09-08 21:07:33.518	\N
33	Chili pepper	\N	\N	2022-09-08 21:07:33.518	\N
34	Chives	\N	\N	2022-09-08 21:07:33.518	\N
35	Cinnamon	\N	\N	2022-09-08 21:07:33.519	\N
36	Cilantro	\N	\N	2022-09-08 21:07:33.519	\N
37	Coconut	\N	\N	2022-09-08 21:07:33.519	\N
38	Coconut milk	\N	\N	2022-09-08 21:07:33.53	\N
39	Coconut oil	\N	\N	2022-09-08 21:07:33.531	\N
40	Cooking oil	\N	\N	2022-09-08 21:07:33.531	\N
41	Coriander	\N	\N	2022-09-08 21:07:33.532	\N
42	Corn	\N	\N	2022-09-08 21:07:33.532	\N
43	Cucumbers	\N	\N	2022-09-08 21:07:33.532	\N
44	Cumin	\N	\N	2022-09-08 21:07:33.542	\N
45	Curry	\N	\N	2022-09-08 21:07:33.544	\N
46	Dill	\N	\N	2022-09-08 21:07:33.544	\N
47	Dry pasta	\N	\N	2022-09-08 21:07:33.544	\N
48	Edamame	\N	\N	2022-09-08 21:07:33.545	\N
49	Egg noodles	\N	\N	2022-09-08 21:07:33.545	\N
50	Egg whites	\N	\N	2022-09-08 21:07:33.548	\N
51	Eggplant	\N	\N	2022-09-08 21:07:33.555	\N
52	Eggs	\N	\N	2022-09-08 21:07:33.555	\N
53	Olive oil	\N	\N	2022-09-08 21:07:33.556	\N
54	Fish sauce	\N	\N	2022-09-08 21:07:33.556	\N
55	Flour	\N	\N	2022-09-08 21:07:33.556	\N
56	Garlic	\N	\N	2022-09-08 21:07:33.556	\N
57	Garlic powder	\N	\N	2022-09-08 21:07:33.568	\N
58	Garlic cloves	\N	\N	2022-09-08 21:07:33.568	\N
59	Ghee	\N	\N	2022-09-08 21:07:33.568	\N
60	Ginger	\N	\N	2022-09-08 21:07:33.569	\N
61	Grated parmesan cheese	\N	\N	2022-09-08 21:07:33.569	\N
62	Green bell pepper	\N	\N	2022-09-08 21:07:33.569	\N
63	Green cabbage	\N	\N	2022-09-08 21:07:33.583	\N
64	Green onions	\N	\N	2022-09-08 21:07:33.583	\N
65	Honey	\N	\N	2022-09-08 21:07:33.583	\N
66	Hot pepper	\N	\N	2022-09-08 21:07:33.584	\N
67	Kale	\N	\N	2022-09-08 21:07:33.584	\N
68	Kimchi	\N	\N	2022-09-08 21:07:33.584	\N
69	Lemon	\N	\N	2022-09-08 21:07:33.599	\N
70	Lime juice	\N	\N	2022-09-08 21:07:33.599	\N
71	Low-fat milk	\N	\N	2022-09-08 21:07:33.6	\N
72	Mango	\N	\N	2022-09-08 21:07:33.6	\N
73	Margarine	\N	\N	2022-09-08 21:07:33.6	\N
74	Mayonnaise	\N	\N	2022-09-08 21:07:33.601	\N
75	Milk	\N	\N	2022-09-08 21:07:33.613	\N
76	Mushrooms	\N	\N	2022-09-08 21:07:33.613	\N
77	Onion	\N	\N	2022-09-08 21:07:33.613	\N
78	Onion powder	\N	\N	2022-09-08 21:07:33.614	\N
79	Parsley	\N	\N	2022-09-08 21:07:33.614	\N
80	Pasta	\N	\N	2022-09-08 21:07:33.615	\N
81	Peanut butter	\N	\N	2022-09-08 21:07:33.625	\N
82	Peanuts	\N	\N	2022-09-08 21:07:33.625	\N
83	Pecans	\N	\N	2022-09-08 21:07:33.626	\N
84	Penne	\N	\N	2022-09-08 21:07:33.626	\N
85	Pepper	\N	\N	2022-09-08 21:07:33.627	\N
86	Pineapple	\N	\N	2022-09-08 21:07:33.627	\N
87	Pork	\N	\N	2022-09-08 21:07:33.631	\N
88	Pork chops	\N	\N	2022-09-08 21:07:33.638	\N
89	Pork sausage	\N	\N	2022-09-08 21:07:33.639	\N
90	Pork shoulder	\N	\N	2022-09-08 21:07:33.639	\N
91	Potato	\N	\N	2022-09-08 21:07:33.639	\N
92	Raisins	\N	\N	2022-09-08 21:07:33.64	\N
93	Red bell pepper	\N	\N	2022-09-08 21:07:33.64	\N
94	Red onion	\N	\N	2022-09-08 21:07:33.643	\N
95	Red pepper	\N	\N	2022-09-08 21:07:33.652	\N
96	Rice	\N	\N	2022-09-08 21:07:33.652	\N
97	Salmon	\N	\N	2022-09-08 21:07:33.652	\N
98	Salt	\N	\N	2022-09-08 21:07:33.652	\N
99	Sesame oil	\N	\N	2022-09-08 21:07:33.653	\N
100	Shallots	\N	\N	2022-09-08 21:07:33.653	\N
101	Shrimp	\N	\N	2022-09-08 21:07:33.663	\N
102	Smoked paprika	\N	\N	2022-09-08 21:07:33.665	\N
103	Sour cream	\N	\N	2022-09-08 21:07:33.666	\N
104	Soy sauce	\N	\N	2022-09-08 21:07:33.667	\N
105	Spaghetti	\N	\N	2022-09-08 21:07:33.667	\N
106	Spinach	\N	\N	2022-09-08 21:07:33.668	\N
107	Sugar	\N	\N	2022-09-08 21:07:33.671	\N
108	Sweet potatoes	\N	\N	2022-09-08 21:07:33.673	\N
109	Teriyaki sauce	\N	\N	2022-09-08 21:07:33.678	\N
110	Tofu	\N	\N	2022-09-08 21:07:33.679	\N
111	Tomato	\N	\N	2022-09-08 21:07:33.679	\N
112	Tomato sauce	\N	\N	2022-09-08 21:07:33.68	\N
113	Tuna	\N	\N	2022-09-08 21:07:33.68	\N
114	Turmeric	\N	\N	2022-09-08 21:07:33.681	\N
115	Vanilla extract	\N	\N	2022-09-08 21:07:33.694	\N
116	Veget soup mix	\N	\N	2022-09-08 21:07:33.696	\N
117	Vegetable broth	\N	\N	2022-09-08 21:07:33.696	\N
118	Vegetable oil	\N	\N	2022-09-08 21:07:33.697	\N
119	Water	\N	\N	2022-09-08 21:07:33.698	\N
120	Worchestire sauce	\N	\N	2022-09-08 21:07:33.698	\N
121	Yellow onion	\N	\N	2022-09-08 21:07:33.701	\N
122	Zucchini	\N	\N	2022-09-08 21:07:33.706	\N
\.


--
-- Data for Name: IngredientCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."IngredientCategory" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Fruits	\N	2022-09-08 21:08:02.748	\N
2	Vegetables	\N	2022-09-08 21:08:02.75	\N
3	Meats	\N	2022-09-08 21:08:02.75	\N
4	Dairy & Dairy-Free	\N	2022-09-08 21:08:02.751	\N
5	Sauces & Seasonings	\N	2022-09-08 21:08:02.751	\N
6	Others	\N	2022-09-08 21:08:02.752	\N
\.


--
-- Data for Name: Recipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Recipe" (id, name, "cleanName", description, "durationSecond", "durationString", "ingredientCount", "ingredientLine", "ingredientLineCount", "numberOfServings", instruction, "imageLink", "videoLink", calories, protein, carb, fiber, fat, sugar, cholesterol, "weightGram", "createdAt", "updatedAt") FROM stdin;
1076	Vegetarian Risotto	\N	\N	3000	50 minutes	11	1 cup rice\n1½ cups water\n2 tbsp olive oil\n7 oz onion, chopped\n2 tsp garlic, minced\n7 oz carrots, chopped\n6 oz red bell pepper, sliced\n4 oz cherry tomatoes, halved\nSalt, to taste\nParsley, to taste\nBasil, to taste	11	2	Bring a large pot of lightly salted water to a boil. Add rice and cook according to package instructions. Set aside.\nHeat oil in a large skillet over medium-high heat. Cook onion and garlic for 3 minutes, then add carrots and cook for 5 minutes. Add cherry tomatoes, red and yellow bell peppers and cook for 3 more minutes.\nAdd rice and mix well. Season with salt, parsley and sage and serve while warm.	https://storage.googleapis.com/sg-uploads/648f99b36acf4828b5ebc0273863ebac.jpg	\N	553.4	16.46	0	12.07	14.95	15.67	0	1294.37090975	2022-09-08 23:03:29.65	\N
1077	Hash Browns	\N	\N	4500	minutes	10	3/4 lb hash brown potatoes\n1/2 lb pork sausage, sliced\n1 onion, diced\n3 eggs\n1/4 cup milk\n1 tsp onion powder\n1 tsp garlic powder\n4 oz shredded cheddar cheese\nSalt, to taste\nGround black pepper, to taste	10	4	Preheat oven to 350°F. Grease a 2 quart baking dish.\nPlace the hash brown potatoes in the bottom of the baking dish.\nHeat a skillet over medium heat and cook and stir the sausage and onion until the sausage is crumbly, evenly browned, and no longer pink, drain.\nMeanwhile, whisk together the eggs, milk, onion powder, garlic powder, salt, and pepper, and pour over the potatoes.\nLayer with half the Cheddar cheese, the sausage mixture, and the remaining Cheddar cheese. Cover with aluminum foil.\nBake in the preheated oven for 1 hour. Remove cover, return casserole to the oven and bake for 10 minutes more.	https://storage.googleapis.com/sg-uploads/2f32a71314734f7a99d2b750c777b106.jpg	\N	607.43	23.52	0	3.71	40.18	3.93	205.95	1064.821888333333	2022-09-08 23:03:29.679	\N
1078	Corned Beef Hash	\N	\N	3600	60 minutes	7	2 tbsp butter\n1 onion, chopped\n1/2 cup chopped corned beef\n2 cups chopped potatoes\nSalt, to taste\nBlack pepper, to taste\nParsley, to garnish	7	1	Place corned beef in a large pot and cover with water. Cover pot and bring to a boil, then reduce to a simmer. Cook 30 minutes.\nPlace potatoes in a skillet and fill it with water. Add salt and bring to a boil. Cook for about 20 minutes, until potatoes are tender.\nHeat butter in a large skillet on medium heat. Add the onion and cook a few minutes, until translucent.\nMix in the chopped corned beef and potatoes. Spread out evenly over the pan. Increase the heat to high or medium-high and press down on the mixture with a metal spatula. Cook until nicely browned.\nRemove from heat, stir in chopped parsley. Add plenty of freshly ground black pepper, and add salt to taste.	https://storage.googleapis.com/sg-uploads/16b0e3bcc93140f58cfd0c1b8111fc11.jpg	\N	564.7	22.41	0	8.99	40.98	7.33	122.24	439.675	2022-09-08 23:03:29.707	\N
1079	Vegan Potato Gratin 	\N	\N	2700	45 minutes	8	10 oz potatoes, peeled and sliced\n3 tbsp vegan butter\n2 cloves garlic, minced\n1 onion, finely chopped\n1/2 cup milk\n1 cup vegetable broth\nSalt, to taste\nBlack pepper, to taste	8	2	Preheat the oven to 350°F. Grease a baking dish and set aside.\nIn a saucepan, add the butter and place it over medium heat. Once melted, add the onions and garlic and cook until softened.\nAdd the flour and cook for another two minutes. Reduce the heat to low, then slowly add the milk and vegetable broth while continuing to whisk.\nOnce all the liquid has been added, bring everything to a boil. Add the salt and pepper and let it boil until it has thickened. Remove the saucepan from the heat.\nPlace a third of the sliced potatoes onto the base of the baking dish. Season with salt and pepper.\nPour a third of the cream sauce on top. Repeat the layers until it ends with the remaining sauce. Bake for 35 minutes and serve.	https://storage.googleapis.com/sg-uploads/ec16cba38a104153b7ceab04297801e6.jpg	\N	336.6	6.83	0	5.5	18.77	10.68	52.14	859.3952312499999	2022-09-08 23:03:29.734	\N
1080	Mashed Potato With Kale, Cabbage And Green Onion	\N	\N	2700	45 minutes	8	6 big potatoes, peeled and cut\nSalt, to taste\n4 tbsp unsalted butter\n4 cups chopped kale\n2 cups chopped cabbage\n3 green onions, minced\n1 cup milk\n4 tbsp all-purpose flour	8	2	Put the potatoes in a medium pot and cover with cold water by at least an inch. Add 2 tbsp of salt, and bring to a boil. Boil for 20 minutes. Drain and set aside.\nReturn the pot to the stove and set over medium-high heat. Melt the butter in the pot and once it's hot, add the greens. Cook for 3 minutes. Add green onion and cook for 1 more minute.\nPour in the milk, cornstarch and add potatoes. Reduce the heat to medium. Use a fork or potato masher and mash the potatoes, mixing them up with the greens.\nAdd salt to taste and serve hot, with a knob of butter in the center.	https://storage.googleapis.com/sg-uploads/47866df8497d439a8dceaab0d17caeff.jpg	\N	513.45	16.75	0	13.16	26.95	15.46	72.12	1187.25	2022-09-08 23:03:29.76	\N
1081	Tuna-Garlic Omelette	\N	\N	1200	20 minutes	7	3 tbsp olive oil\n3 garlic cloves, minced\n1 onion, chopped\n6 eggs, beaten\n6 oz tuna, chopped\nSalt, to taste\nFreshly ground black pepper, to taste	7	2	Add oil to the pan and heat over medium heat. Add garlic and onion and cook for 2 minutes. Add the tuna and cook for 10 more minutes.\nAdd eggs, salt and pepper. Cook for 10 minutes on each side. Setve immediately.	https://storage.googleapis.com/sg-uploads/78f4e0cbf67948f9bd36ad0f51abab0f.jpg	\N	516.77	38.55	0	1.65	35.49	3.95	597.97	693.49713875	2022-09-08 23:03:29.784	\N
1082	Spinach-Mushroom Pepper Egg Muffins	\N	\N	2100	35 minutes	7	1-2 tsp virgin coconut oil\n½ onion, minced\n1 red bell pepper, diced\n3 mushrooms, sliced\n1 handful spinach, sliced thinly\n6-7 eggs\n¼ tsp sea salt	7	1	Pre-heat oven to 350ºF.\nGrease a muffin pan with coconut oil.\nIn a large bowl, add onion, pepper, mushrooms and spinach.\nMix well.\nScoop mixture into muffin pan, distributing evenly.\nIn the same bowl, add eggs.\nBeat eggs thoroughly.\nAdd salt and mix well.\nDistribute egg mixture evenly into the muffin pan.\nPlace pan in oven and bake for 20-25 minutes or until eggs are set.	https://storage.googleapis.com/sg-uploads/bd1586dabf09458583be8f8875dc662c.jpg	\N	233.6	15.46	0	5.08	10.33	8.85	186	379.549523125	2022-09-08 23:03:29.808	\N
1083	Hasselback Potato	\N	\N	4500	75 minutes	8	6 potatoes\n3 tbsp olive oil\n3 tbsp butter\nSalt, to taste\nBlack pepper, to taste\n4 oz bacon, sliced\n1 cup sour cream\n1 shallot, chopped	8	2	Preheat oven to 425°F.\nPut the bacon in a pan on a medium heat. When the fat starts to run out from the bacon, increase the heat and cook for 1 minute on each side. Set aside.\nPlace a potato on a cutting board between two chopsticks or skewers. Slice the potatoes into ¼ inch slices, but do not slide the knife all the way down.\nRub each potato with the olive oil and generously season with salt and pepper.\nSlice the butter into thin slices and place the butter pieces in between slices of potato. Place the potatoes onto the prepared baking sheet.\nTransfer the baking sheet to the oven and bake for about an hour, or until potatoes are cooked through.\nTop with sour cream, bacon, and shallots, and serve.	https://storage.googleapis.com/sg-uploads/0e82a36693d442df92730b85f3a6c407.jpg	\N	636.45	18.9	0	3.3	51.34	1.18	113.22	672.3605925	2022-09-08 23:03:29.834	\N
1149	Fresh Pineapple Chunks	pineapple chunks	\N	300	5.0 min	1	1/4 pineapple	1	1	Peel and cut pineapple into 6-8 slices. Serve and enjoy!	https://images.unsplash.com/photo-1469715670736-059afa7dee7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	20.89	0.23	0	0	0.05	3.42	0	41.25	2022-09-08 23:03:31.534	\N
1084	Spicy Rice	\N	\N	1800	30 minutes	11	2 tbsp olive oil\n2 carrots, grated\n1 tsp minced garlic\n8 oz ground beef\nSalt, to taste\nBlack pepper, to taste\n1/2 cup rice\n1 tbsp sesame oil\n2 tbsp soy sauce\n2 tbsp chopped parsley\n1 tsp minced ginger	11	3	Bring water to a boil. Cook rice according to package directions, fluff with a fork, and set aside.\nAdd 1 tbsp oil to wok and increase heat to high. Add carrots and stir-fry for 3 minutes.\nStir in garlic and ginger. Add beef and cook until browned, 5 minutes,\nStir in soy sauce and sesame oil. Stir in rice until heated through. Garnish with some parsley and serve.	https://storage.googleapis.com/sg-uploads/c24df954f29646119e12e4a686cb6ac9.jpg	\N	415.47	20.88	0	4.44	23.65	4.95	46.87	662.3961850000001	2022-09-08 23:03:29.864	\N
1085	Zucchini Egg Muffins	\N	\N	1800	30 minutes	6	2 cups sliced zucchini\n1/4 cup chopped onion\n1/2 cup feta crumbled cheese\n2 eggs, beaten\n3 tbsp canned corn\nSalt, to taste	6	2	Preheat oven to 350°F.\nCombine ingredients in a large bowl. Scoop mixture into mini muffin tins coated to prevent sticking.\nPress the mixture down with the back of a spoon to tightly compact in each muffin tin well.\nBake for 20 minutes or until firm and starting to brown.	https://storage.googleapis.com/sg-uploads/a2ccc8f288b34d9dafacd38500acb16d.jpg	\N	201.75	14.2	0	2.94	11.44	2.88	210.92	468.7875	2022-09-08 23:03:29.889	\N
1086	Mushroom Soup	\N	\N	1800	30 minutes	10	2 tbsp butter\n1/2 lb sliced mushrooms\n1/4 cup chopped onion\n3 tbsp all-purpose flour\nSalt, to taste\nBlack pepper, to taste\n1 cup vegetable broth\n1 carrot, sliced\n1 tbsp chopped parsley\n2 tbsp olive oil	10	2	In a large saucepan, heat butter and oil over medium-high heat. Saute mushrooms and onion until tender.\nMix flour, salt, pepper and broth until smooth; stir into mushroom mixture.\nBring to a boil. Cook and stir until thickened, about 2 minutes. Reduce heat; stir in cream. and carrot.\nSimmer, uncovered, until flavors are blended, about 15 minutes, stirring occasionally.	https://storage.googleapis.com/sg-uploads/7fed2adabd804354b1a10d52cbc68bfa.jpg	\N	347.11	6.08	0	3.94	25.81	6.82	30.5	705.308685	2022-09-08 23:03:29.916	\N
1087	Oven Scrambled Eggs With Bacon	\N	\N	2100	35 minutes	6	1/3 cup ghee\n10 eggs\n3/4 cup milk\n12 oz bacon\nSalt, to taste\nGround black pepper, to taste	6	4	Preheat the oven to 350°F.\nPour melted ghee into a baking dish. In a large bowl, whisk together eggs and salt until well blended.\nGradually whisk in milk. Pour egg mixture into the baking dish. Add bacon on top.\nBake uncovered for 10 minutes, then stir, and bake an additional 10 to 15 minutes.	https://storage.googleapis.com/sg-uploads/7a37dfa584854f2aaa662c9dde1935a9.jpg	\N	500.9	34.47	0	0.15	38.29	3.54	543.72	1121.760944166667	2022-09-08 23:03:29.94	\N
1088	Kimchi Fried Rice	\N	\N	2100	35 minutes	6	2 cups chopped kimchi\n1/3 cup kimchi juice, divided\n1 cup rice\n2 tbsp olive oil\n2 eggs\nSalt, to taste	6	2	In a medium saucepan bring water to a boil. Add rice,  and a pinch of salt. Cook, covered, about 15 minutes, fluff with a fork, and set aside.\nAdd kimchi to a pan and cook for 1 minute. Fold in rice and break up using a wooden spoon. Mix in remaining kimchi juice, until well combined.\nCrack eggs into pan. Cook 3 minutes, or until white is set and edges are crisp and golden.\nFry until warmed through, about 5 minutes. Turn off the heat, stir in olive oil and divide among 2 bowls and serve with fried egg on top.	https://storage.googleapis.com/sg-uploads/560af61d669f43ee8bbe10df95176cec.jpg	\N	607.57	16.55	0	8.27	22.39	8.44	186	774.6	2022-09-08 23:03:29.975	\N
1089	Omelette With Cauliflower And Parsley	\N	\N	900	15 minutes	7	3 eggs\n3 tbsp milk\nSalt, to taste\nFreshly ground black pepper, to taste\n3 tbsp olive oil\n2 tbsp parsley\n1 cup sliced cauliflower	7	1	Whisk together eggs, milk, salt and pepper. Heat a non-stick pan up to a moderate heat and add half of the oil.\nPour in the egg mixture and cook until almost set, then flip and cook for a minute more. When the omelette is cooked, transfer to a plate.\nAdd oil to the pan. Add cauliflower and parsley and cook for 3 minutes.\nTop half of the omelette with ¾ of the cauliflower-parsley mixture, then fold the omelette and top with the remaining.	https://storage.googleapis.com/sg-uploads/81d0077d1fc041b5ae318db0cfc09151.jpg	\N	643.56	22.8	0	2.97	56.69	4.99	562.58	359.15	2022-09-08 23:03:30	\N
1090	Soy Garlic Pork Chops	\N	\N	1500	25 minutes	10	1/3 cup tomato sauce\n2 tbsp soy sauce\n1 tbsp honey\n2 garlic cloves, crushed\n12 oz pork chops\n4 potatoes, peeled and diced\n4 cups broccoli florets\n5 tbsp olive oil\nSalt, to taste\nGround black pepper, to taste	10	3	Preheat the over to 390°F.\nSeason and oil the potatoes and place them in the oven for 35 minutes. Add the broccoli and bake for another 10 minutes.\nPreheat grill for medium heat and lightly oil the grate.\nWhisk tomato sauce, soy sauce, and garlic together in a bowl to make a glaze.\nSear the pork chops on both sides on the preheated grill. Lightly brush glaze onto each side of the chops as they cook, grill until no longer pink in the center, about 7 to 9 minutes per side.	https://storage.googleapis.com/sg-uploads/90d2ec2c260546dd81bb1e9643dfb07b.jpg	\N	515.65	29.93	0	5.1	33.38	8.02	78.24	1080.327610833333	2022-09-08 23:03:30.026	\N
1091	Stewed Cabbage With Meatballs	\N	\N	3600	60 minutes	12	10 oz ground beef\n1/3 cup brown rice\n1/2 onion, sliced\n1 garlic clove, minced\n6 oz canned diced tomatoes\n10 oz cabbage, chopped\n1 cup tomato sauce\n1/2 red bell pepper, chopped\n1 carrot, sliced\nBlack pepper, to taste\nSalt, to taste\n1 egg	12	3	Heat the oven up to 400°F.\nIn a medium skillet bring water to a boil and cook rice according to package directions.\nSaute onion, bell pepper and carrot in oil in a skillet with a heavy bottom for about 2 minutes.\nAdd chopped cabbage and keep cooking until softened, about 5 more minutes.\nAdd diced canned tomatoes, tomato sauce, and cook together on medium heat for 5 minutes.\nMake the meatballs. In a large bowl mix together raw ground meat, cooked brown rice, the egg, garlic, paprika, salt and pepper and mix.\nDrop the meat and rice mixture balls onto a tray or a plate and roll into meatballs the size of a golf ball with wet fingers.\nPour half of the cabbage tomato sauce in a casserole dish. Place the raw meatballs in the sauce in one layer, top with remaining sauce, and cover with tin foil.\nBake for 40 minutes, and serve.	https://storage.googleapis.com/sg-uploads/d671966b92194d0fa6d92023ec0b79f1.jpg	\N	384.81	25.63	0	6.31	14.92	7.72	120.59	1328.320934583333	2022-09-08 23:03:30.05	\N
1092	Vegetable Stir Fry	\N	\N	1200	20 minutes	9	1 large carrots, sliced\n1 cups broccoli florets\n4 oz mushrooms, sliced\n3 tbsp olive oil\n2 garlic cloves, peeled and minced\n1 tsp ginger, minced\n¼ cup chicken broth\n2 tbsp soy sauce\n6 oz canned corn, drained	9	1	In a large wok, over medium heat, heat the oil. Add the vegetable and stir fry about 3 minutes or until vegetables are crisp-tender. Add the garlic and ginger and cook until fragrant.\nIn a small bowl, combine all the ingredients for the stir fry sauce. Pour the sauce over the vegetables and stir.\nTurn heat down to medium/low and cook 3-4 minutes, until sauce thickens and vegetables are desired tenderness.	https://storage.googleapis.com/sg-uploads/abc064f5916b490c9e8394ce6def6cb2.jpg	\N	783.51	29.57	0	10.77	48.01	21.12	25.62	644.74523125	2022-09-08 23:03:30.075	\N
1160	Cucumber Spears	cucumber spears	\N	300	5.0 min	1	2 medium cucumbers	1	1	Trim and peel the cucumberscut into 6-8 spears. Serve and enjoy!	https://images.unsplash.com/photo-1493882946517-213a21fe70f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80	\N	37.67	1.35	0	3.01	0.23	3.47	0	208	2022-09-08 23:03:31.838	\N
1093	Rice With Zucchini And Rice	\N	\N	1800	30 minutes	7	1/2 onion, chopped\n1 clove garlic, minced\n1 zucchini, sliced\n5 oz mushrooms, sliced\nSalt, to taste\n2 tbsp olive oil\n1/2 cup rice	7	2	Put olive oil into a pan and heat. Then add garlic. When the garlic starts to color, add the rice. Stir for a while. Then add the water and salt.\nCook over high heat for 5 minutes, then reduce and simmer for 5 more minutes.\nHeat 1 tbsp olive oil in a large skillet. Add the onion and mushrooms and fry over medium heat for 5 minutes, stirring often.\nAdd the zucchini and continue to cook for 5 more minutes. Season with a small sprinkling of salt.\nFinish by adding rice. Stir the ingredients, let cook for 2 more minutes, and then serve on a plate.	https://storage.googleapis.com/sg-uploads/ce101f9fa3f14625b9024a51c6990841.jpg	\N	320.96	9.37	0	4.52	14.42	5.66	0	461.347615625	2022-09-08 23:03:30.101	\N
1094	Spanish-Style Tortilla With Potato And Spinach	\N	\N	3600	60 minutes	7	¼ cup olive oil\n1 lb large potatoes, peeled and cut into rounds\n3 onions, chopped\nSalt, to taste\n6 oz spinach\n5 large eggs\nFreshly ground black pepper, to taste	7	2	Preheat the oven to 350°F.\nHeat the olive oil in a 10-inch cast-iron skillet over medium heat.\nAdd the potatoes, onion, and salt, stirring and turning occasionally, for 10 minutes.\nDrain the potatoes in a colander set over a bowl, reserving the olive oil. Let cool.\nIn a large pot of lightly salted boiling water, add the spinach and cook for 30 seconds. Drain in a colander and run under cold water. Drain again, then roughly chop.\nLightly beat the eggs in a large bowl, then stir in the spinach, salt and pepper.\nAdd 1 tablespoon of the reserved olive oil to the skillet over medium heat. Fan the potatoes out to cover the bottom of the pan and add the egg and spinach mixture.\nCook over low heat, covered, for 12 minutes. Then place the tortilla on the top rack directly under the broiler for about 2 minutes.\nRemove from the oven and let cool for about 15 minutes before serving.	https://storage.googleapis.com/sg-uploads/db5268f87ff941a48eb18f90d140f2fc.jpg	\N	685.8	26.72	0	11.91	39.72	11	465	1415.58950875	2022-09-08 23:03:30.125	\N
1095	Zucchini And Mushroom Risotto With Garlic	\N	\N	1800	30 minutes	9	1½ cup rice\n3 cups water\n2 tbsp olive oil\n4 garlic cloves, minced\n1 zucchini, chopped\n1 cup sliced mushrooms\nSalt, to taste\nFreshly ground black pepper, to taste\nBasil, to taste	9	2	Bring a large pot of lightly salted water to a boil. Add rice and cook according to package instructions. Set aside\nHeat olive oil in a pan over medium heat. Add garlic and cook for 3 minutes. Add zucchini and cook for 3 minutes, then add mushrooms and cook for 3 more minutes. Season with salt and pepper and mix well.\nMix in the rice and basil leaves and mix everything together. Serve immediately.	https://storage.googleapis.com/sg-uploads/4242eb2669dd440e8bd1050a57ab235c.jpg	\N	597.68	19.64	0	8.7	15.15	5.25	0	1197.8	2022-09-08 23:03:30.149	\N
1096	Summer Vegetable Rice	\N	\N	1500	25 minutes	8	1 cup uncooked white rice\n1 tbsp olive oil\n1 zucchini, slived and cut into triangles\n1 cup canned corn, drained\n14 oz canned tomatoes, diced\n1 medium yellow onion, chopped\nSalt, to taste\nFresh cracked black pepper, to taste	8	2	Bring a pot of water to the boil. Cook the rice to package instructions. Drain and set aside to cool. Once cooled, fluff the rice using a fork.\nIn a separate pan, add olive oil and heat on medium heat. Add onion, a pinch of salt, and saute for 2-3 minutes. Add zucchini, saute for additional 3 minutes.\nAdd tomatoes, and simmer on low heat for 5 minutes. A minute or so before finishing the sauce off, add corn and stir the mixture well. Season with salt and pepper to taste.\nDivide the rice between plates, top with vegetable sauce and enjoy.	https://storage.googleapis.com/sg-uploads/9e1ab4fa8a684c30b6d7c2667e4f9b30.jpg	\N	579.08	11.64	0	6.48	13.75	11.22	0	959.69332375	2022-09-08 23:03:30.173	\N
1097	Salmon And Potato Salad	\N	\N	2400	40 minutes	7	2 eggs\n1/2 lb potatoes\n3 tbsp olive oil\n1 onion, chopped\n10 oz salmon in oil, drained\n1/2 cup mayonnaise\n1/2 tbsp parsley	7	4	Place eggs in a saucepan and cover with cold water. Bring water to a boil and immediately remove from heat.\nCover and let eggs stand in hot water for 10 to 12 minutes. Remove from hot water, cool, and peel.\nWhile the eggs are cooking, place the potatoes in a saucepan with just enough water to cover.\nBring to a boil, and cook for 10 to 15 minutes, or until tender. Remove from heat, drain, and set aside.\nHeat oil in a skillet over medium heat. Add onions, and saute until lightly browned and translucent, about 10 minutes.\nFlake salmon and spread it over the bottom of a glass baking dish or serving dish. Spread the sauteed onions over the salmon.\nGently spread a little bit of the mayonnaise over the onion layer. Top with potatoes, and spread enough mayonnaise just to add moisture to the layer.\nFinally, slice the eggs, and cover the layer of potatoes. Spread mayonnaise over the eggs, and garnish with chopped parsley.	https://storage.googleapis.com/sg-uploads/15c931f36b474124925c11201167e389.jpg	\N	508.06	19.79	0	2.11	42.7	1.95	143.53	922.6914162500001	2022-09-08 23:03:30.197	\N
1098	Chicken And Mushrooms	\N	\N	2400	40 minutes	7	8 oz chicken breasts, boneless\n2 tbsp olive oil\n8 oz fresh mushrooms, sliced\n1/2 cup water\n2 tbsp ghee\nSalt, to taste\nGround black pepper, to taste	7	2	Preheat oven to 400°F.\nSeason chicken on all sides with salt and ground black pepper.\nHeat olive oil over medium-high heat in an ovenproof skillet. Place chicken skin-side down in skillet and cook until browned, about 5 minutes.\nTurn chicken over; stir mushrooms with a pinch of salt into skillet. Increase heat to high.\nCook, stirring mushrooms occasionally, until mushrooms shrink slightly, about 5 minutes.\nTransfer skillet to the preheated oven and cook until chicken is no longer pink in the center and the juices run clear, 15 to 20 minutes.\nTransfer chicken breasts to a plate and loosely tent with foil; set aside.\nSet skillet on the stovetop over medium-high heat; cook and stir mushrooms until brown bits start to form on the bottom of the pan, about 5 minutes.\nPour water into the skillet, and bring to a boil while scraping the browned bits off of the bottom of the pan..\nCook until water is reduced by half, about 2 minutes. Remove from heat\nStir in any accumulated juices from the chicken into the skillet.\nStir ghee into mushroom mixture, stirring constantly until butter is completely melted and incorporated.\nSeason with salt and pepper. Spoon mushroom sauce over chicken and serve.	https://storage.googleapis.com/sg-uploads/ab1a0c56e0194ac59a0ab54a3b7c6ff8.jpg	\N	461.71	20.05	0	2.67	37.04	4.26	69.22	641.89237	2022-09-08 23:03:30.221	\N
1099	Cilantro-Lemon Cauliflower Rice	\N	\N	1800	30 minutes	8	1 head cauliflower\n1 onion, diced\n1 garlic clove, minced\n2 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\n1 lemon, juiced\n½ cup cilantro, chopped	8	2	Slice the cauliflower head in half and use a knife to remove all the florets.\nInsert the grater adapter into your food processor and start feeding the cauliflower florets through the top.\nHeat the olive oil in a large pan and sauté the diced onion and garlic for a few minutes, until its translucent.\nAdd the cauliflower rice to the pan and sauté for another 5 minutes. Season with salt and pepper to taste.\nAdd in the lemon juice and zest, and chopped cilantro. Toss everything together and serve immediately.	https://storage.googleapis.com/sg-uploads/847893f042a1487694c70bd23a865242.jpg	\N	302.14	9.56	0	11.01	14.91	12.2	0	1103.9	2022-09-08 23:03:30.244	\N
1100	Paleo Scrambled Eggs	\N	\N	600	10 minutes	5	5 eggs\n1/2 cup coconut milk\n1 tbsp olive oil\nSalt, to taste\nGroudn black pepper, to taste	5	2	Beat eggs in a bowl. Stir in coconut milk, salt, and pepper until well combined.\nHeat oil in a skillet over medium-low heat, pour in egg mixture. Cook and stir until fluffy and firm, 5 to 7 minutes.	https://storage.googleapis.com/sg-uploads/d3a796c288e84304a9332f16b5e49547.jpg	\N	275.14	17.74	0	0.29	20.66	3.55	471.1	393.4	2022-09-08 23:03:30.273	\N
1101	Grilled Salmon With Mashed Potato And Spinach	\N	\N	1800	30 minutes	8	1½ lb potatoes, peeled and diced\n¼ cup milk\nSalt, to taste\n½ cup sour cream\n3 tbsp olive oil\n6 oz spinach, chopped\n15 oz salmon, sliced\nRed pepper, to taste	8	3	Boil potatoes in water until soft. Drain potatoes and mash with milk, salt, and sour cream. Cook spinach in a pan with olive oil until wilted.\nPlace salmon on a grill or pan and cook for about 10 minutes on each side or until cooked through.\nServe salmon with mashed potatoes and spinach, sprinkled with red pepper and parsley.	https://storage.googleapis.com/sg-uploads/0a499be506844164afa0893f33f5c6de.jpg	\N	721.76	37.53	0	7.96	47.11	6.02	133.19	1651.828540625	2022-09-08 23:03:30.303	\N
1102	Easy Canned Tuna Pasta	\N	\N	900	15 minutes	7	4 tablespoon olive oil\n2 large cloves garlic, minced\n5 oz tuna, canned\n1 teaspoon lemon juice\nSalt\nBlack pepper, to taste\n3 oz pasta	7	1	Bring a salted pot of water to the boil, add pasta and cook according to package directions.\nWhen the pasta is close to being ready, add the oil to a small pan over medium heat. Once the oil is hot, add the garlic and cook it for 30 seconds. Stir in the tuna and lemon juice. Let it heat through.\nOnce the pasta is done, add some of the pasta water (a couple tablespoons) to the sauce. Then drain the pasta and toss with the sauce. Season with salt & pepper as needed.	https://storage.googleapis.com/sg-uploads/63def98581c14d4e85c8508aa878b3db.jpg	\N	688.39	33.5	0	1.96	56.55	4.26	66.62	304.1795183333334	2022-09-08 23:03:30.328	\N
1103	Zucchini-Onion Scrambled Eggs	\N	\N	1200	20 minutes	6	5 eggs\nSalt, to taste\nFreshly ground black pepper, to taste\n2 zucchini, diced\n½ onion, chopped\n3 tbsp olive oil	6	2	In a small bowl whisk the eggs with salt and pepper.\nHeat the olive oil in a skillet. Add chopped onion and cook until golden on the medium heat. Then add zucchini and toss. Cook it for a few minutes on the medium heat.\nPour the egg mixture over the zucchini and mix well with a spatula or a wooden spoon. Cook until the eggs firming. Serve imemdiately.	https://storage.googleapis.com/sg-uploads/b6c2ba7726074c1992725c1a01bdbc74.jpg	\N	401.46	17.76	0	2.21	32.61	5.27	465	626.4	2022-09-08 23:03:30.357	\N
1104	Spinach-Garlic Scramble	\N	\N	600	10 minutes	7	2 tsp butter\n1 shallot, minced\n2 garlic cloves, minced\n3 cups spinach, chopped\n4 eggs, beaten\nSalt, to taste\nFreshly ground black pepper, to taste	7	1	Heat a large nonstick skillet over medium heat. Add the shallot and garlic and cook until soft.\nAdd the spinach and cook until wilted. Season with salt and pepper. Add the eggs, and scramble as they cook. Serve immediately.	https://storage.googleapis.com/sg-uploads/e59f6aeaf64146f8848cdadad34585ba.jpg	\N	396.66	28.26	0	2.88	27.13	1.93	764.34	327.3583333333333	2022-09-08 23:03:30.381	\N
1105	Carrot Pancake	\N	\N	1800	30 minutes	5	2 cups shredded carrots\n2 eggs\n½ cup flour\n1 tsp salt\n2 tbsp olive oil	5	4	Put shredded carrot, two eggs and flour into a medium bowl, add salt and mix all the ingredients well.\nHeat oil in a non-stick pan over medium heat and shake the pan around to let the oil spread evenly on the bottom of the pan. Carefully place the mixture onto the pan and create three round shapes use the spatula, fry for about 5 minutes each side.	https://storage.googleapis.com/sg-uploads/bdf4fa8814d740fa985a18b023bb1a4d.jpg	\N	179.24	5.35	0	2.21	9.43	3.17	93	451.5	2022-09-08 23:03:30.406	\N
1106	Creamy Mushroom Soup	\N	\N	1500	25 minutes	8	¼ cup butter\n1 cup chopped mushrooms\n2 shallots, chopped\n2 tbsp all-purpose flour\n14 oz canned chicken broth\nSalt, to taste\nBlack pepper, to taste\n1 tbsp olive oil	8	2	Melt the butter in a large saucepan over medium-high heat. Saute the mushrooms, and shallots for about 5 minutes.\nMix in the flour until smooth. Gradually stir in the chicken broth. Cook, stirring, 5 minutes, or until thick and bubbly and blend.\nServe in Season with salt and pepper, and sprinkle with olive oil.	https://storage.googleapis.com/sg-uploads/39a661c4d9eb4985bbd06033b580f4d6.jpg	\N	670.85	52.71	0	1.17	46.08	1.53	160.23	581.06832375	2022-09-08 23:03:30.43	\N
1107	Greek Tomato Rice	\N	\N	1800	30 minutes	7	½ tbsp olive oil\n1 small onion, diced\n1 garlic clove\n½ cup long grain rice\n1 cup vegetable broth\n1 cup tomato sauce\n¼ tsp salt	7	2	Heat oil in a saucepan over medium heat and cook onion and garlic until soft and translucent, about 3 minutes. Add rice and cook 2 minutes.\nAdd broth, tomato sauce, salt, and pepper and bring to a boil. Cover and reduce heat to low.\nCook until all the liquid is absorbed and rice is done, about 20 minutes. Serve immediately.	https://storage.googleapis.com/sg-uploads/26c512b022634da6870c498c62713b71.jpg	\N	282.48	6.17	0	3.7	4.33	4.12	0	747.65	2022-09-08 23:03:30.453	\N
1108	Mushroom Omelette With Avocado	mushroom omelette	\N	1800	20 minutes	6	1/2 cup mushrooms\n3 eggs\n2 tablespoons olive oil\n1/2 cup cherry tomatoes\n1/4 yellow onion\n1/2 avocado	6	1	Crack eggs into a mixing bowl and beat with a fork.\nHeat olive oil in frying pan and add chopped onion, tomatoes and mushroooms until they are soft.\nSet aside vegetables and add eggs to the pan, moving them around to spread them out.\nWhen the omelet begins to firm up, sprinkle over the vegetables.\nServe with avocado and season with black pepper and herbs of your choice.	https://sg-data.storage.googleapis.com/images_bucket/bb6f5fcb75768403317ea97a31abb870.png	\N	635.93	22.28	0	6.64	54.88	3.7	558	383.25	2022-09-08 23:03:30.478	\N
1109	Haluski	\N	\N	2700	45 minutes	6	3 oz medium-wide egg noodles\n2 tbsp butter, divided\n2 onions, chopped\n⅔ cabbage head, cored and chopped\nSalt, to taste\nFreshly ground black pepper, to taste	6	2	Preheat the oven to 300°F.\nFill a large pot with lightly salted water and bring to a rolling boil. Stir in egg noodles and return to a boil.\nCook noodles uncovered, stirring occasionally, until tender but still slightly firm, about 5 minutes. Drain well.\nMelt half of the butter in a large skillet over medium-low heat, cook and stir onions until translucent, 5 minutes.\nCook and stir remaining butter and cabbage into onions until cabbage is softened but not browned, 5 minutes. Season with salt and black pepper.\nPlace cooked noodles and cabbage mixture in a large roasting pan and stir gently to combine.  Bake for 15 minutes. Serve immediately.	https://storage.googleapis.com/sg-uploads/0165d8f409094608b215e71b81d08623.jpg	\N	340.46	8.57	0	5	13.12	8.24	72.18	487.9902360416667	2022-09-08 23:03:30.5	\N
1173	Apple With Almond Butter	apple with almond butter	\N	300	5.0 min	2	1 green apple\n2 tablespoons almond butter	2	1	Wash the apple then core and slice. Spread slices with almond butter or serve on the side.	https://storage.googleapis.com/sg-uploads/7480444c147e404e8dd259e560db764d.jpeg	\N	477.54	12.15	0	15	18.73	1	0	278	2022-09-08 23:03:32.223	\N
1110	Chinese Style Meatballs	\N	\N	6600	110 minutes	6	1 lb ground pork\n4 eggs\n1/3 cup soy sauce\n1/4 cup sliced green onions\n2 cloves garlic, minced\n1/2 tsp ground ginger	6	3	Combine ground pork, eggs, soy sauce, green onions, garlic, and ginger in a large mixing bowl.\nUsing gloves, mix together with your hands until all ingredients are incorporated well.\nCover bowl with plastic wrap and chill in refrigerator 1 to 2 hours.\nBring a saucepan of water to a boil. Using a 1 teaspoon cookie scoop or a teaspoon, form pork mixture into small meatballs.\nCook meatballs in small batches in boiling water until they float to the top and stay there for 3 minutes.\nRemove cooked meatballs from water with a slotted spoon.	https://storage.googleapis.com/sg-uploads/f13a8714def44a659057f988c8361602.jpg	\N	512.07	37.74	0	0.67	38.43	1.15	356.86	786.4590366666667	2022-09-08 23:03:30.524	\N
1111	Japanese Curry And Rice	\N	\N	2700	45 minutes	8	4 tbsp butter\n3 tbsp curry\n2 lb chicken breasts, chopped\n2 tsp olive oil\n1 onion, chopped\n1 potato, cubed\n1 cup carrots, cut into chunks\n1/2 cup grated apple	8	3	In a medium saucepan over medium heat, bring water to a boil. Add rice and pinch of salt. Cook, covered, for 15 minutes and set aside,\nMelt the butter in a small saucepan and add curry powder.\nHeat olive oil and brown the chicken on all sides and transfer to a bowl.\nReduce the heat to medium and add the onions. Caramelize 10 minutes.\nAdd the potatoes, carrots, grated apple, and browned chicken to the caramelized onions. Pour the water over it all and stir along the bottom.\nAdd butter with curry and stir. Season to taste with salt and pepper, and serve with rice.	https://storage.googleapis.com/sg-uploads/0773cfb48d34491a92aab5bd0eb1eb63.jpg	\N	658.55	62.62	0	8.21	32.26	4.47	228.16	1460.83474	2022-09-08 23:03:30.548	\N
1112	Spinach With Eggs	\N	\N	1800	30 minutes	6	2 tbsp olive oil\n1 onion, diced\n12 oz spinach\nSalt, to taste\nBlack pepper, to taste\n4 eggs	6	2	In a large skillet, heat olive oil over medium heat. Add in onions and cook until transparent, about 5 minutes.\nAdd in the spinach and season with salt and black pepper. Cook it stirring gently until the spinach leaves wilt\nMake wells in the spinach mixture when it is tender enough. Crack an egg into well. Cook for 3 minutes.\nSprinkle salt and black pepper on each egg. Serve hot.	https://storage.googleapis.com/sg-uploads/8160197654844951a21fceaa237d6f5a.jpg	\N	348.22	18.42	0	5.39	23.79	4.48	372	735.0942775	2022-09-08 23:03:30.575	\N
1113	Penne With Zucchini And Tomato	\N	\N	1800	30 minutes	9	6 oz penne\n2 tbsp olive oil\n1 clove garlic, chopped\n1 zucchini, sliced\n2 tbsp dried tomatoes\n8 oz tomato sauce\nSalt, to taste\nBlack pepper, to taste\n1 tbsp chopped parsley	9	2	Bring a large pot of water to a boil. Add salt and pasta. Cook according to package instructions.\nMeanwhile, heat olive oil in a large skillet over medium heat. Add garlic and saute fot 2 minutes or until garlic turns golden in color.\nAdd zucchini, parsley, and tomatoes. Season with salt and pepper. Add tomato sauce and toss.\nMix the pasta with zucchini sauce and serve.	https://storage.googleapis.com/sg-uploads/8365096e48184d57a18aa9f5cdc6f2cb.jpg	\N	326.01	7.25	0	4.79	15.8	3.46	0	569.5433237499999	2022-09-08 23:03:30.6	\N
1114	Omelette With Tofu And Parsley	\N	\N	600	10 minutes	6	3 eggs\n4¾ tbsp milk\nSalt, to taste\nFreshly ground black pepper, to taste\n1 cup cubed tofu\n1¾ cup parsley	6	1	Whisk eggs, milk, salt and pepper.\nSpray 8-inch non-stick skillet with cooking spray. Heat over medium heat. Pour in egg mixture. As eggs set around edge of skillet, with spatula, gently push cooked portions toward center of skillet. Tilt and rotate skillet to allow uncooked egg to flow into empty spaces.\nWhen the egg mixture is cooked, transfer to a plate. Top half of the omelette with half of tofu and half of parsley, then fold the omelette in half and repeat.\nServe immediately.	https://storage.googleapis.com/sg-uploads/7c3729095b9d479488132b11bd8c7cbb.jpg	\N	511.72	44.52	0	4.79	29.38	6.66	565.24	583.7375	2022-09-08 23:03:30.624	\N
1115	Grilled Garlic Shrimp Skewers	\N	\N	1800	30 minutes	5	1 lb shrimp, peeled and deveined\n1 tbsp olive oil\n3 tbsp unsalted butter\n3 garlic cloves, minced\nSalt, to taste	5	2	Prepare your grill for direct high heat, with one side of the grill as a cool side with no coals or flame.\nWhile the grill is heating, thread the pre-soaked skewers through the shrimp. Start at the tail and push the skewers through the middle and end of the shrimp.\nBrush shrimp with olive oil and sprinkle with salt. Place butter and garlic in a microwave-safe bowl and heat in microwave until the butter has melted and is hot.\nArrange skewers on grill so that the shrimp are over the coals or flame and the exposed bamboo skewer ends are over the cool side of the grill.\nGrill for about 2 minutes on each side. As soon as the shrimp are done, remove from grill and place in a serving dish. Baste with melted garlic butter. Serve imemdiately.	https://storage.googleapis.com/sg-uploads/0b5237b0f5954dac986e059735fa51b0.jpg	\N	443.85	46.15	0	0	27.25	0	385.13	529.79237	2022-09-08 23:03:30.65	\N
1116	Classic Organic Bacon And Eggs	classic organic bacon and eggs	\N	1800	15 minutes	5	2 eggs\n1/4 cup fresh parsley\n2 ounces organic bacon\n3 tablespoons olive oil\n1 cup cherry tomatoes	5	1	Fry bacon in pan and set aside.\nHeat olive oil in pan and add eggs that have been previously beaten in a bowl.When the eggs begin to firm up, sprinkle over the parsley and serve with crispy bacon and fresh tomatoes.	https://sg-data.storage.googleapis.com/images_bucket/5719bd99462b406f4a42d60013bf1753.png	\N	636.35	28.52	0	4.4	51.61	9.01	399.22	456.19904625	2022-09-08 23:03:30.674	\N
1117	Spanish Potato Omlete	\N	\N	2400	40 minutes	6	½ cup olive oil\n5 potatoes, diced into 1-inch pieces\n1 red onion, chopped\n8 eggs\nSalt, to taste\nBlack pepper, to taste	6	3	Heat the oil in a pan. Fry potatoes until crispy, golden and tender. Add the onion and fry until transparent. Drain all the oil.\nReturn potatoes and onions to the pan, arranging them in a single layer. Reduce heat down to low.\nBeat eggs with salt and pepper to taste. Pour egg mixture into the pan, moving the potatoes and onions around the eggs using a plastic spatula.\nPlace a big, round plate on top of the pan, and flip the tortilla onto the plate. Then, slide it back into the pan carefully, moving the onion and potatoes carefully back into the pan along with the tortilla.\nKeep cooking, gently shaking the pan occasionally. To remove the tortilla from the pan, place a clean plate on top of the tortilla and flip again onto the plate and serve.	https://storage.googleapis.com/sg-uploads/4993808a30e04ed8898977ae0ac01282.jpg	\N	564.73	18.79	0	2.47	48.77	2.17	496	854.3	2022-09-08 23:03:30.697	\N
1118	Crispy Skin Turmeric Salmon	\N	\N	1800	30 minutes	6	9 oz salmon\nSalt, to taste\n1 tsp ground turmeric\n1 tbsp olive oil\n1 lemon, sliced\n2 tbsp parsley	6	2	Using a knife, scrape off the scales from the skin of the fish fillets. Then rinse off the scales in the sink. Place on a plate and pat dry with paper towels.\nSprinkle salt and turmeric all over the flesh side of the salmon fillets. Using a pair of tongs, turn and rub on the plate to ensure they are evenly coated.\nHeat olive oil in a non stick fry pan. When oil is hot, transfer the salmon fillets, flesh side down into the pan. Allow them to fry for 3 minutes per side.\nTurn fillets again and fry for 1 more minute per side. Remove from pan and serve immediately, garnished with parsley and lemon.	https://storage.googleapis.com/sg-uploads/a5d9bfeae42b4171af621f83772c50e3.jpg	\N	338.86	26.63	0	1.29	24.04	0.81	70.17	342.9790414583334	2022-09-08 23:03:30.726	\N
1119	Herb Omelette With Spinach	\N	\N	600	10 minutes	7	2 tbsp olive oil\n4 eggs\n2 tbsp chopped parsley\n2 tbsp chopped basil\n2 cup chopped spinach\nSalt, to taste\nGround black pepper, to taste	7	1	Heat the oil in a small non-stick frying pan, then cook the spinach until they start to wilt. Remove and set aside.\nMeanwhile beat the eggs with the herbs, salt and plenty of freshly ground black pepper in a small bowl.\nPour the egg mixture into the pan and stir gently with a wooden spoon so the egg that sets on the base of the pan moves to enable uncooked egg to flow into the space.\nAdd spinach and let it set into an omelette.	https://storage.googleapis.com/sg-uploads/0499e46f915548c8a6c61159c1e2632f.jpg	\N	548.98	27.3	0	2.15	46.39	1.07	744	310.4	2022-09-08 23:03:30.752	\N
1120	Smoked Salmon Scramble	\N	\N	600	10 minutes	5	6 large eggs\nSalt, to taste\n1 tbsp butter\n4 oz salmon, chopped\nFreshly ground black pepper, to taste	5	2	In a bow, whisk together the eggs, chives, and salt. Heat the oil or butter in a saute pan over medium heat.\nAdd the egg mixture to the pan, and cook, stirring occasionally until almost set, about 4 minutes. Stir in the salmon and continue to cook for 2 minutes longer.\nServe immediately, seasoned with pepper.	https://storage.googleapis.com/sg-uploads/2090db4a1e134bda9d0c7546f8253240.jpg	\N	378.66	30.6	0	0.29	27.67	0.57	604.44	435.4855925000001	2022-09-08 23:03:30.778	\N
1121	Steamed Salmon With Vegetables	\N	\N	1800	30 minutes	9	2 carrots, peeled and thinly sliced\n4 oz broccoli, cut into florets\n4 oz cauliflower, cut into florets\n2 tbsp lemon juice\nSalt, to taste\nBlack pepper, to taste\n6 oz salmon, skinless\n1 cup vegetable broth\n4 sprigs parsley	9	1	Rinse salmon and pat dry, divide into 2 equal portions. Season with salt and pepper and drizzle with lemon juice.\nIn a saucepan bring to a boil vegetable broth.\nArrange vegetables in a steamer, season with salt and pepper and place salmon on top. Cover with parsley and close.\nSteam over boiling broth for about 10 minutes. Remove and serve on a plate immediately.	https://storage.googleapis.com/sg-uploads/328db0f07d6844cda6735967c3fea6eb.jpg	\N	647.77	39.61	0	22.23	16.62	26.85	52.73	1151.69332375	2022-09-08 23:03:30.806	\N
1122	Potato And Broccoli Frittata	potato and broccoli frittata	\N	1800	20 minutes	5	2 tablespoons olive oil\n1/2  broccoli\n1/4 cup vegetable broth\n1 potato\n2 eggs	5	1	Boil the potato in the vegetable broth with water for 5 minutes until just tender.\nMeanwhile, heat oven to 400 ºF. \nMix the eggs together, then drain the potato and stir into the egg.\nCut broccoli into smaller pieces and add it to the mixture.\nHeat the oil in a frying pan, then tip in the egg, potato, and broccoli mixture.\nCook over low heat for 5 minutes then cook in the oven for 15 minutes until cooked through.\nYou can serve with basil and season with black pepper to taste.	https://sg-data.storage.googleapis.com/images_bucket/0e22490be946d42a90012f7aad9f220a.png	\N	426.7	14.95	0	2.87	36.75	1.46	372	265.5	2022-09-08 23:03:30.832	\N
1123	Pasta Al' Tonno	\N	\N	1500	25 minutes	7	12 oz spaghetti\n4 tbsp olive oil, divided\n2 cloves garlic, minced\n1/2 onion, chopped\n10 oz tuna in oil, drained\nSalt, to taste\nGround black pepper, to taste	7	4	In a large pot cook spaghetti pasta with a teaspoon of oil in boiling salted water until al dente. Drain, leaving pasta moist.\nMeanwhile, in a large skillet over medium heat saute the onions and garlic in 2 tablespoons of olive oil until soft and tender, about 3 or 4 minutes.\nAdd the two tuna and let cook on medium for 6 minutes. Add salt and pepper to taste, cooked pasta, and continue stirring.\nTurn burner to high heat, add remaining 2 tablespoons of olive oil and cook for 3 or 4 minutes.	https://storage.googleapis.com/sg-uploads/eb931e66d22a4327b973781cc2b0f508.jpg	\N	508.44	22.04	0	2.05	15.78	0.87	33.31	771.5895087499999	2022-09-08 23:03:30.859	\N
1124	Red Pepper Pasta	\N	\N	1200	20 minutes	7	1 red pepper, thinly sliced\n2 tbsp olive oil\n1 garlic clove\n3 oz spaghetti\n1 tbsp chopped parsley\nSalt, to taste\nGround black pepper, to taste	7	1	Blitz olive oil and garlic in a food processor, season well and set aside.\nBring a pan of salted water to the boil, add the pasta and cook for 1 min less than the pack instructions and drain, reserving a ladleful of cooking water.\nTip the pasta back into the pan, along with the reserved cooking water and sauce with the sliced red pepper, and return to the heat to warm through.\nTip the pasta into a bowl. Season and serve.	https://storage.googleapis.com/sg-uploads/ad1d44066cc447649167769eeb8f14ab.jpg	\N	608.21	8.09	0	5.43	29.09	6.34	0	275.748569375	2022-09-08 23:03:30.884	\N
1125	Soy-Lime Roasted Tofu	\N	\N	2700	45 minutes	4	12 oz tofu, cubed\n⅔ cup reduced-sodium soy sauce\n⅔ cup lime juice\n3 tbsp toasted sesame oil	4	2	Combine soy sauce, lime juice and oil in a medium bowl or large sealable plastic bag. Add the tofu and gently toss to combine. Marinate for 20 mintues.\nPreheat the oven to 450°F.\nRemove the tofu from the marinade with a slotted spoon. Spread out on 2 large baking sheets, making sure the pieces are not touching.\nRoast, gently turning halfway through, until golden brown, about 20 minutes. Serve immediately.	https://storage.googleapis.com/sg-uploads/1eb258f9c81c42f880f59586b4d5ef20.jpg	\N	396.16	14.08	0	0.83	28.59	13.08	0	702.3276108333332	2022-09-08 23:03:30.91	\N
1126	Lemon Scrambled Eggs	\N	\N	300	5 minutes	6	3 tbsp butter\n4 large eggs\n2 tbsp lemon juice\n2 tbsp chopped parsley, to garnish\nSalt, to taste\nBlack pepper, to taste	6	1	Crack the eggs into a bowl. Season with salt and pepper. Pour in the lemon juice. Whisk until blended.\nMelt the butter in a nonstick pan over medium-low heat. When butter starts to bubble, pour in the eggs.\nStart making up and down swirls in the other direction as the eggs cook, about 2 minutes.\nRemove eggs from the heat. Season with salt and pepper and garnish with fresh chopped parsley.	https://storage.googleapis.com/sg-uploads/1c514f504e954617b08f3cad88fdbef8.jpg	\N	610.06	26.05	0	0.92	53.75	1.61	835.51	288.5625000000001	2022-09-08 23:03:30.938	\N
1127	Salmon With Mashed Sweet Potato	\N	\N	1800	30 minutes	6	2 sweet potatoes, peeled and cut into 1-inch cubes\n2 tbsp olive oil\n8 oz salmon fillet\n2 cloves garlic, minced\nBlack pepper, to taste\nSalt, to taste	6	2	Place sweet potato chunks in a large pot. Add about 1 cup water and bring to a boil. Once boiling, cover and reduce heat. Allow to simmer for 15 minutes.\nMeanwhile, heat oil in a skillet over medium-high. Once hot, place salmon skin side down and allow to cook for 5 minutes.\nFlip salmon and turn off heat, allowing to cook for an additional 2 minutes. Remove from pan and set aside.\nBy now, the potatoes should be ready. Drain most of the water, leaving about 1/2 cup of water in the pot.\nSeason with salt and pepper, then mash together with a potato masher.\nPlate sweet potato mash and top with salmon.	https://storage.googleapis.com/sg-uploads/0002315d65ba4758a49fb07d0edb5499.jpg	\N	390.68	24.41	0	1.87	18.32	6.1	74.84	350.9143668181818	2022-09-08 23:03:30.965	\N
1174	Broccoli Florets	broccoli florets	\N	300	5.0 min	1	1/2 cup broccoli florets	1	1	Wash the broccoli florets. Serve and enjoy!	https://images.unsplash.com/photo-1518164147695-36c13dd568f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	14.01	1.5	0	1.5	0	0.5	0	42.5	2022-09-08 23:03:32.261	\N
1128	Summer Zucchini Garden Soup	\N	\N	1800	30 minutes	6	¼ cup olive oil\n¾ cup onion, chopped\nSalt, to taste\n2 garlic cloves, chopped\n2 lb zucchini, chopped\n1 cup basil, chopped	6	2	Heat oil in 3 to 4-quart heavy saucepan over medium-low heat. Add onion, and cook, stirring occasionally, until softened and browned, about 5 minutes.\nAdd salt and garlic and cook an additional 5 minutes. Add chopped zucchini and cook, stirring occasionally, 5 minutes.\nAdd water to taste and simmer, partially covered, until tender, about 15 minutes. Puree soup in batches in a blender.\nAdd the basil into the blender with the last batch of soup, and quickly blend the basil. Season soup with additional salt and pepper. Serve immediately.	https://storage.googleapis.com/sg-uploads/96c0a83445834fea845e8b65f2f5b14b.jpg	\N	394.52	12.95	0	6.01	28.87	2.54	0	1156.78474	2022-09-08 23:03:30.991	\N
1129	Baked Avocado Eggs With Bacon	\N	\N	1500	25 minutes	5	2 large avocados\n4 eggs\nSalt, to taste\nBlack pepper, to taste\n4 oz bacon, crumbled	5	2	Pre-heat the oven to 400° F.\nCut open the avocados, remove the pin, and scrape out a portion of the inside of the fruit.\nCrack an egg into each avocado half. Season with salt and pepper. Drop the crumbled bacon on top of the eggs.\nPlace the avocados on a baking sheet. Bake for 20 minutes, or until the whites of the egg are set, and serve.	https://storage.googleapis.com/sg-uploads/db0a1409c9304416a33b54538fd50a7f.jpg	\N	646.55	39.98	0	10.34	47.74	1.37	412.26	621.6980925	2022-09-08 23:03:31.018	\N
1130	Cilantro And Parsley Shrimp	\N	\N	1500	25 minutes	8	2 tbsp olive oil\n1 lb shrimp, peeled and deveined\n1 onion, chopped\n4 cloves garlic, minced\n1/2 cup chopped parsley\n1/2 cup chopped cilantro\n1 avocado, sliced\n2 cups sliced tomatoes	8	4	Heat the olive oil in a large skillet over medium-high heat. Stir in the shrimp and onion, cook and stir until the shrimp are beginning to turn pink, about 2 minutes.\nContinue cooking until the shrimp are no longer opaque in the center and the onion has turned translucent, about 4 minutes. Stir in the parsley and cilantro.\nServe on a plate with sliced avocado and tomatoes.	https://storage.googleapis.com/sg-uploads/b2bec3c5ab8a4913b193f931a09330ef.jpg	\N	282.37	25.85	0	4.27	14.55	2.05	162.16	1156.59237	2022-09-08 23:03:31.045	\N
1131	Roasted Tomato And Shrimp With Zoodles	\N	\N	1800	30 minutes	8	6 oz cherry tomatoes, sliced\n3 tbsp olive oil, divided\nSalt, to taste\nFreshly ground black pepper, to taste\n12 oz shrimp, peeled and deveined\n2 garlic cloves, minced\n2 tbsp lemon juice\n3 zucchinis, spiralized	8	2	Preheat the oven to 450°F.\nPlace the tomatoes on a rimmed baking sheet and drizzle with 1 tbsp of olive oil. Sprinkle with salt and pepper then toss them together until coated.\nRoast in the oven for 10 minutes. In a bowl toss together the shrimp, garlic, the remaining oil, salt and pepper. Remove the tomatoes from the oven.\nPour the shrimp mixture onto the baking sheet. Place the tomatoes and shrimp back in the oven and roast for 5 more minutes.\nRemove from the oven and pour over the top of the zucchini noodles. Drizzle with lemon juice. Serve immediately.	https://storage.googleapis.com/sg-uploads/e34cd837847945fbaa491af25d07689a.jpg	\N	438.67	41.38	0	3.68	24.09	3.18	243.24	959.19141625	2022-09-08 23:03:31.072	\N
1132	Non-Dairy Creamy Zucchini Soup	non dairy creamy zucchini soup	\N	1800	30 minutes	6	2 teaspoons olive oil\n1 cup coconut milk\n2 cups chicken broth\n2 zucchini\n2 carrots\n2 tomato	6	1	Cut carrots and zucchini into thick slices.\nFry them in a pan with olive oil for 5 minutes.\nHeat a large pan with the chicken broth and add the carrots, zucchini and tomatoes.\nSimmer for 15 minutes or until soft.\nPlace everything in a blender and add the coconut milk and herbs of your choice.\nSeason with black pepper and herbs of your choice.	https://sg-data.storage.googleapis.com/images_bucket/8e1e22e386f8a3349465c287a12b0295.png	\N	995.28	28.89	0	9.86	72.82	26.35	28.35	1125.69904625	2022-09-08 23:03:31.098	\N
1133	Cherry Tomato And Herb Omelette	\N	\N	600	10 minutes	6	6 cherry tomatoes, halved\n2 large eggs\n1 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\nParsley, to taste	6	1	Pour some olive oil into a non-stick grill proof pan and tip the cut tomatoes in. Season them well and fry them off for 2 minutes.\nIn the meantime put a grill onto high heat and lightly beat the eggs in a bowl. Pour the beaten eggs over the tomatoes.\nQuickly stir the eggs with a silicon spatula to even them out and make sure they cook evenly. Season with salt and pepper.\nSlide onto a warm plate and serve immediately, topped with parsley.	https://storage.googleapis.com/sg-uploads/13b3540d31434137a24c25a8496930ce.jpg	\N	678.46	38.59	0	25.99	23.56	48.91	372	1645.8	2022-09-08 23:03:31.124	\N
1134	Oven-Baked Zucchini Chips	\N	\N	8100	135 minutes	4	1 large zucchini, sliced into rounds\n2 tbsp extra virgin olive oil\nSalt, to taste\nFreshly ground black pepper, to taste	4	2	Preheat oven to 200°F (use convection bake setting if your oven allows it).\nPlace sliced zucchini on paper towels and let sit for 10 minutes. Blot the tops of the zucchini with another paper towel to absorb as much moisture as possible.\nLine two baking sheets with parchment paper and place the zucchini on the trays in a single layer, making sure not to overlap.\nLightly brush the zucchini with olive oil, season with salt and pepper to taste.\nPlace in oven and bake for about 2 hours, flipping every 30 minutes, until crispy and starting to brown. Remove crispy chips and enjoy.	https://storage.googleapis.com/sg-uploads/3eb83136bc2849699865cd415a4bb18b.jpg	\N	275.51	1.74	0	1.82	27.47	3.11	0	159.3	2022-09-08 23:03:31.15	\N
1135	Hard Boiled Eggs	hard boiled egg	\N	600	10.0 min	1	2 eggs	1	1	Bring a quart of water to a boil.  Add the eggs and cook for about 10 minutes.\nStrain the eggs from the water.  Let cool, remove the shells, and enjoy!	https://images.unsplash.com/photo-1529570634977-ec042420117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80	\N	138.71	12.56	0	0	9.51	0.37	372	100	2022-09-08 23:03:31.176	\N
1136	One-Pan Chicken, Broccoli, And Rice	\N	\N	1500	25 minutes	9	3 tbsp extra virgin olive oil\n½ medium yellow onion, diced finely\n1 lb boneless, skinless chicken breasts, cut into bite sized pieces\n2 cloves of garlic, minced\n1 tsp salt\n1 tsp ground black pepper\n1 cup white rice\n2½ cups broccoli florets, cut into bite sized pieces\n2½ cups of chicken broth	9	4	In a large skillet or pan, saute onions in two tbsp of olive oil over medium heat. Season chicken with salt and pepper.\nOnce onions soften, increase the heat to medium high and add chicken to the pan. Brown the chicken pieces and add the garlic and cook for 1 more minute.\nPush chicken to one side of the pan and add additional tablespoon of olive oil to other side. Add the uncooked rice in the olive oil and saute it for a couple of minutes.\nAdd the chicken broth to the pan and bring the mixture to a boil. Lower the heat to a simmer and cover the pan with a lid.\nCook chicken and rice mixture covered for about 12 minutes. Sprinkle the broccoli evenly over the chicken and rice mixture and stir to combine.\nContinue to cook covered another 8 minutes on low, or until broccoli and rice are both tender.	https://storage.googleapis.com/sg-uploads/96f0c61cbeea46df888d38aee43e3e04.jpg	\N	707.71	58.07	0	1.76	31.7	1.98	119.63	1490.659037588663	2022-09-08 23:03:31.203	\N
1137	Tuna Rice Bowl	\N	\N	1500	25 minutes	7	1 cup long-grain rice\n8 oz canned tuna\n2 tbsp chopped parsley\n2 tbsp lemon juice\nSalt, to taste\nGround black pepper, to taste\n2 tbsp olive oil	7	2	Cook rice in a pot of water according to the instructions on the packaging.\nWhile rice is cooking, place tuna into a large mixing bowl and break up with a fork. Add lemon juice and parsley. Mix until thoroighly combined.\nFluff rice with a fork to separate the grains and break up any large clumps; transfer into the mixing bowl.\nMix thoroughly with a spoon until all the ingredients are evenly incorporated. Season to taste.	https://storage.googleapis.com/sg-uploads/44e22aeaa67c43a9a8e29df3ae1edcc7.jpg	\N	580.78	33.23	0	4.42	17.75	0.42	53.3	480.1961850000001	2022-09-08 23:03:31.229	\N
1138	Classic Organic Bacon And Eggs	classic organic bacon and eggs	\N	1800	15 minutes	5	2 eggs\n1/4 cup fresh parsley\n2 ounces organic bacon\n3 tablespoons olive oil\n1 cup cherry tomatoes	5	1	Fry bacon in pan and set aside.\nHeat olive oil in pan and add eggs that have been previously beaten in a bowl.When the eggs begin to firm up, sprinkle over the parsley and serve with crispy bacon and fresh tomatoes.	https://sg-data.storage.googleapis.com/images_bucket/5719bd99462b406f4a42d60013bf1753.png	\N	636.35	28.52	0	4.4	51.61	9.01	399.22	456.19904625	2022-09-08 23:03:31.253	\N
1139	Avocado And Tuna Salad	avocado and tuna salad	\N	1800	15 minutes	7	2 tablespoons olive oil\n1/2 cup cucumbers\n1/2 cup celery\n1 cup tuna\n2 tablespoons lemon juice\n1 avocado\nPinch of sea salt to taste	7	1	Chop celery and cucumbers into small cubes and cut avocado into bite-sized pieces.\nSeparate tuna with fork and mix it with the other ingredients.\nSeason with lemon juice, olive oil, and sea salt.	https://sg-data.storage.googleapis.com/images_bucket/a67358183da39f4a0d2d353bf97727fe.png	\N	751.25	53.66	0	4.51	51.5	3.3	106.53	536.8916664721831	2022-09-08 23:03:31.278	\N
1140	Sauteed Mushrooms In Soy Sauce Glaze	\N	\N	900	15 minutes	5	2 tbsp olive oil\n12 oz mushrooms, sliced\n2 garlic cloves, chopped\n2 tbsp soy sauce\n1 tbsp parsley, chopped	5	1	Pre-heat the frying pan to high heat and add olive oil. Add mushrooms and cook until they are golden brown. Lower heat to medium.\nAdd the finely chopped garlic and the soy sauce. Cook them until the mushroom absorbs the soy sauce and the garlic is golden brown.\nAdd parsley and cook for 30 seconds. Serve immediately.	https://storage.googleapis.com/sg-uploads/a9cb3df77a9a479ba9037f4adf464450.jpg	\N	372.98	14.41	0	3.82	28.22	7.38	0	416.9942775	2022-09-08 23:03:31.303	\N
1141	Tuna Macaroni Pasta	\N	\N	5400	90 minutes	7	12 oz penne\n10 oz tuna in oil\n1 cup mayonnaise\n1/2 tsp ground black pepper.\n1/2 cup corn\n1/2 cup diced red bell pepper\n2 tbsp basil	7	4	In a large pot of salted boiling water, cook pasta until al dente, rinse under cold water and drain.\nIn a large bowl, combine the pasta, corn, bell pepper and tuna.\nPrepare the dressing by whisking together the mayonnaise and pepper. Add to pasta salad. Garnish with basil. Drizzle with flaxseed oil.	https://storage.googleapis.com/sg-uploads/6b22fc9dc3d248749bd221ce2861a604.jpg	\N	634.4	23.02	0	4.2	43.66	4.06	56.41	961.9228425443316	2022-09-08 23:03:31.33	\N
1142	Scampi With Butter And Lemon	\N	\N	900	15 minutes	7	2 cloves garlic, minced\n2 tbsp butter\n1 tbsp olive oil\n10 oz shrimp, peeled and deveined\n1/4 cup lemon juice\nBlack pepper, to taste\n2 tbsp chopped parsley	7	3	In a skillet, saute garlic in butter and oil for 2 minutes.\nAdd the shrimp, lemon juice, and pepper. Cook and stir until the shrimp turn pink, 5 minutes.	https://storage.googleapis.com/sg-uploads/d4f74d84a6fe416ebf3c3a0d5e926aa2.jpg	\N	219.9	19.79	0	0.81	13.95	0.49	162.08	394.2702312500001	2022-09-08 23:03:31.355	\N
1143	Sweet And Spicy Apple Coleslaw	\N	\N	600	10 minutes	8	6 cups thinly sliced green cabbage\n1 apple, grated\n⅓ cup mayonnaise\n¼ cup lemon juice\n⅓ tsp raw honey\n¼ tsp salt\nFreshly ground black pepper, to taste\n2 tbsp flat leaf parsley, roughly chopped	8	4	Place the shredded cabbage and apple in a mixing bowl and toss to combine.\nIn a small glass measuring cup or bowl, whisk together the mayo, juice, honey, salt and pepper until smooth.\nPour the dressing over the cabbage mixture and toss to combine. Let rest for 5 minutes before enjoying.	https://storage.googleapis.com/sg-uploads/57517b2e2eb2474d859021d4a1d10e79.jpg	\N	238.07	3.29	0	6.28	14.09	5.24	7.7	931.9666666666667	2022-09-08 23:03:31.382	\N
1144	Zucchini And Potato Scrambled Eggs	\N	\N	2700	45 minutes	8	2 zucchinis, sliced\n1 potato, chopped\n2 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\n8 eggs\n1 tsp dried parsley\n2 tbsp lemon juice	8	2	Preheat the oven to 350°F.\nPlace the vegetables on a lined tray. Drizzle them with olive oil and add the salt and pepper. Cook for 25 minutes.\nMeanwhile in a bowl, crack the eggs, add the parsley and whisk them with a fork to combine well.\nUse a frying pan at a medium to high heat and add the vegetables with the eggs. Stir them together until the eggs are cooked. Serve topped with lemon juice.	https://storage.googleapis.com/sg-uploads/d96f02d52eee4acf998ee3082ec2fe58.jpg	\N	452.22	29.1	0	2.2	33.11	1.15	744	743.9333333333334	2022-09-08 23:03:31.408	\N
1145	Tuna Stuffed Avocado	\N	\N	600	10 minutes	7	1 avocado, halved and pitted\n¼ can tuna, drained\n¼ cup diced cherry tomatoes\n½ cup coriander, roughly chopped, divided\n1 tbsp lime juice\nSalt, to taste\nBlack pepper, to taste	7	2	Scoop out some of the avocado from the pitted area to widen the "bowl" area. Slice the avocado into cubes and put in a mixing bowl.\nAdd the tuna, tomatoes and ¼ cup cilantro to the mixing bowl. Pour lime juice over and stir it all together until everything is well mixed.\nScoop the tuna into the avocado bowls. Season with salt, pepper and the remaining coriander.	https://storage.googleapis.com/sg-uploads/e81216908be04abfaa5e600777c469f1.jpg	\N	186.89	8.46	0	5.95	12.81	1.67	3.85	285.45	2022-09-08 23:03:31.433	\N
1146	Avocado Slices	avocado slices	\N	300	5.0 min	1	1/2 medium avocado, about 1/3 cup	1	1	Cut the avocado in half and remove the seed. Remove the skin, slice and enjoy!	https://images.unsplash.com/photo-1543363136-7fbfcd3b240d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	130.54	1.5	0	5.03	11	0.49	0	75	2022-09-08 23:03:31.458	\N
1147	Bacon-Wrapped Avocado Wedges	\N	\N	900	15 minutes	4	1 avocado\n8 oz bacon, sliced\nSalt, to taste\nFreshly ground black pepper, to taste	4	1	Preheat air fryer to 400°F.\nCut avocado in half, remove pit and peel. Cut each half into slices. Wrap 1 bacon slice around each avocado wedge.\nPlace wedges in a single layer on tray in air-fryer basket and cook until bacon is cooked through, about 10 minutes. Serve immediately.	https://storage.googleapis.com/sg-uploads/e97ddf22a99c4b46975d99292cde45a4.jpg	\N	518.49	49.3	0	10.63	28.01	3.05	108.86	384.6961850000001	2022-09-08 23:03:31.485	\N
1148	Apple With Almond Butter	apple with almond butter	\N	300	5.0 min	2	1 green apple\n2 tablespoons almond butter	2	1	Wash the apple then core and slice. Spread slices with almond butter or serve on the side.	https://storage.googleapis.com/sg-uploads/7480444c147e404e8dd259e560db764d.jpeg	\N	477.54	12.15	0	15	18.73	1	0	278	2022-09-08 23:03:31.51	\N
1150	Baked Chicken, Potato And Carrots	\N	\N	2700	45 minutes	9	1 lb potatoes, peeled and cut into quarters\n1 lb carrots, peeled and cut into chunks\n1 yellow onion, peeled and cut into large chunks\n1 lb boneless, skinless chicken breasts\n3 tbsp olive oil, divided\n2 tbsp chopped fresh parsley\nSalt, to taste\n3 cloves garlic\nFresh cracked black pepper, to taste	9	3	Preheat oven to 400°F.\nIn a large baking dish scatter the onions, garlic, potatoes and carrots, season using salt and pepper to taste. Add olive oil and toss to coat the veggies.\nSeason chicken with salt and pepper and drizzle with the remaining olive oil. Massage the oil into the chicken for a minute or so.\nBake the veggies for 20 minutes, add the chicken on top and continue to bake for 20-25 minutes or until the chicken is nice and done-through.\nAllow to cool down a bit before serving with a sprinkling of fresh parsley.	https://storage.googleapis.com/sg-uploads/652e5b67468343479d1744d3e1063378.jpg	\N	556.78	33.72	0	8.24	29.56	10.28	74.09	1513.17711	2022-09-08 23:03:31.56	\N
1151	Tomato-Tuna Penne	\N	\N	1800	30 minutes	9	8 oz penne (or other pasta)\n3 tbsp olive oil, divided\n2 tbsp minced garlic\n3 tbsp chopped basil\n3 medium tomatoes, chopped\n½ cup tomato sauce\n6 oz tuna in olive oil, drained\nSalt, to taste\nFreshly ground black pepper, to taste	9	2	Bring a large pot of lightly salted water to a boil. Add pasta and cook according to package instructions. Drain, mix in 1 tbsp of olive oil and set aside.\nPour remaining olive oil into a pan over medium heat. Put the garlic and saute. Add in the basil, tomatoes and tomato sauce and cook for 6 minutes.\nAdd tuna and cook for 6 minutes. Mix in the pasta and season with salt and pepper. Serve immediately.	https://storage.googleapis.com/sg-uploads/1b7dd03ec38b4ea58120327983097195.jpg	\N	589.55	34.18	0	5.84	28.36	0.9	30.62	1069.74332375	2022-09-08 23:03:31.585	\N
1152	Garlic-Broccoli Stir Fry With Shrimp	\N	\N	1800	30 minutes	7	¾ lb large shrimp, peeled and deveined\n6 cloves garlic, minced\n4 cups broccoli florets\n3 onions, diced\n2 tbsp soy sauce\n3 tbsp sesame oil, divided\nSalt, to taste	7	2	Heat 2 tbsp of sesame oil in a large, nonstick skillet over medium heat. Pour in the shrimp and season with salt.\nFry the shrimp for 1 minute on each side. Remove the shrimp from the pan and pour in the remaining oil.\nToss in the onion and salt and saute for a few minutes until they begin to soften. Add in the broccoli, garlic and soy sauce and saute for 30 seconds.\nToss the shrimp back into the pan and mix until everything is well incorporated and the shrimp is fully cooked, about 1 minute.\nServe immediately.	https://storage.googleapis.com/sg-uploads/e5ea71d95e5c4b20aa94e7fe57edceb5.jpg	\N	525.71	43.35	0	9.15	21.38	13.67	226.23	1284.5942775	2022-09-08 23:03:31.61	\N
1153	Keto Garlic-Shrimp Zoodles	\N	\N	900	15 minutes	8	2 zucchini\n10 oz peeled and deveined shrimp\n2 tbsp olive oil\n2 tbsp lemon juice\n3 garlic cloves, minced\nSalt, to taste\nFreshly ground black pepper, to taste\n2 tbsp chopped parsley	8	2	Spiralize the zucchini. Set aside.\nAdd the olive oil and lemon juice to a skillet on medium heat. Once the pan is warm, add the shrimp. Cook the shrimp for one minute per side.\nAdd the garlic. Cook for an additional minute, stirring often. Add the zucchini noodles and stirconstantly for 2 minutes.\nSeason with salt and pepper and sprinkle with the chopped parlsey. Serve immediately.	https://storage.googleapis.com/sg-uploads/323fce49d766429290c08c808245c13b.jpg	\N	314.29	32.65	0	1.78	16.62	0.42	202.7	611.49523125	2022-09-08 23:03:31.637	\N
1154	Avocado And Tuna Salad	avocado and tuna salad	\N	1800	15 minutes	7	2 tablespoons olive oil\n1/2 cup cucumbers\n1/2 cup celery\n1 cup tuna\n2 tablespoons lemon juice\n1 avocado\nPinch of sea salt to taste	7	1	Chop celery and cucumbers into small cubes and cut avocado into bite-sized pieces.\nSeparate tuna with fork and mix it with the other ingredients.\nSeason with lemon juice, olive oil, and sea salt.	https://sg-data.storage.googleapis.com/images_bucket/a67358183da39f4a0d2d353bf97727fe.png	\N	751.25	53.66	0	4.51	51.5	3.3	106.53	536.8916664721831	2022-09-08 23:03:31.661	\N
1155	Kale And Sweet Potato Soup	kale and sweet potato soup	\N	1800	30 minutes	9	1 sweet potatoes\n1 cup coconut milk\n1/2 red pepper\n1 tablespoon ginger\n1 cup kale\n2 tablespoons olive oil\n1 cup chicken broth\n1/2 cup brown rice\n1 teaspoon turmeric	9	1	In a large saucepan warm the olive oil over medium heat.\nSauté red pepper until it is soft, about 5 minutes.\nAdd chopped sweet potatoes, turmeric, ginger and the chicken broth and enough water to cover by 1 inch.Bring soup to a boil, cover, reduce heat and simmer until vegetables are very tender, about 20 minutes.Puree the soup with a vertical blender. Add sea salt and kale, cover, and cook an additional 10 minutes.	https://sg-data.storage.googleapis.com/images_bucket/47842a13107a61c51819ce8771ef43ee.png	\N	1701.81	68.34	0	14.18	104.12	17.11	102.5	804.6333333333333	2022-09-08 23:03:31.687	\N
1156	Stir-Fried Cabbage	\N	\N	900	15 minutes	6	2 tbsp olive oil\n7 garlic cloves, crushed and chopped\n15 oz green cabbage, cored, sliced\n¾ cup raw peanuts, chopped\n3 tbsp thai fish sauce\nFreshly ground black pepper, to taste	6	2	In a wok or large carbon steel or stainless steel skillet, heat oil over high heat until just smoking. Move wok off-heat, add the garlic, and cook for 30 seconds.\nReturn wok to high heat, add the cabbage and peanuts, and cook, stirring and tossing rapidly to ensure garlic doesn’t burn and cabbage is evenly coated in oil.\nContinue to cook and begin to carefully add a few drops of water, in ¼ tsp increments around the sides of the wok, for 2 minutes.\nAdd fish sauce around the sides of the wok, and continue to cook, tossing and stirring constantly, until fish sauce is fully absorbed into the cabbage, around 30 seconds.\nSeason to taste with pepper, transfer to a serving plate, and serve immediately.	https://storage.googleapis.com/sg-uploads/5582ee61c7cb4467bd23ff3d9192076b.jpg	\N	578.86	21.31	0	10.26	43.56	9.4	11.69	641.5428468749999	2022-09-08 23:03:31.711	\N
1157	Paleo Cauliflower Rice	\N	\N	900	placeholder	5	1 cauliflower head\n2 tbsp olive oil\n2 tsp cumin\nSalt, to taste\nGround black pepper, to taste	5	2	Place cauliflower chunks in a food processor and pulse until broken down into rice-size pieces.\nHeat olive oil in a skillet over medium heat, add cauliflower 'rice', cumin, salt, and pepper.\nCover skillet and cook until heated through, 3 to 5 minutes. Remove lid and fluff 'rice' with a fork.	https://storage.googleapis.com/sg-uploads/1ecf12ad075743e68c03963f66bb2f1a.jpg	\N	251.59	8.18	0	9.69	14.71	8.03	0	881.3	2022-09-08 23:03:31.737	\N
1158	Keto Bacon-Wrapped Avocado Fries	\N	\N	1200	20 minutes	2	2 avocados, pitted\n9 oz bacon, thinly slice	2	3	Preheat oven to 400°F.\nPeel avocado and cut into wedges. Wrap each wedge of avocado with a 1/2 slice or full slice of bacon depending on size.\nPlace all on a baking sheet pan with a little room in between.\nBake in the oven for 20 minutes depending on how thick your bacon is to desired crispness.	https://storage.googleapis.com/sg-uploads/2398813288884aa4afe18d766b781787.jpg	\N	267.77	19.27	0	6.7	16.89	1.43	40.82	555.145708125	2022-09-08 23:03:31.792	\N
1159	Avocado With Tomato	avocado with tomato	\N	300	5.0 min	2	1 medium tomato\n1 medium avocado	2	1	Cut the avocado in half and remove the core.\nCut the tomato into large pieces.\nRemove the peel and mix with pieces of tomato. Salt and pepper to taste. Enjoy!	https://images.unsplash.com/photo-1575000977355-8b2a719926c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80	\N	291.22	4.83	0	4.35	22.29	0.99	0	308	2022-09-08 23:03:31.815	\N
1161	Easy Keto Barbecue Chicken Thighs	\N	\N	1500	25 minutes	5	2 lb boneless, skinless chicken thighs\n1 cup teriyaki sauce, divided\nSalt, to taste\nGround black pepper, to taste\n2 tbsp olive oil	5	4	Preheat an outdoor grill to 350°F. Oil the grate.\nSeason each side of the chicken thighs with salt and pepper. Place inner side of each chicken thigh on the preheated grill.\nBush the top of each with 1 tablespoon barbecue sauce. Grill undisturbed for 3 minutes, watching for flare-ups.\nMove chicken pieces to another part of the grill if flare-ups occur.\nTurn chicken pieces and brush each side with an additional 1 tablespoon barbecue sauce.\nGrill, turning the pieces three more times, about 6 minutes per side. Serve with additional sauce.	https://storage.googleapis.com/sg-uploads/31df15cb917141399f01606550c22676.jpg	\N	371.45	44.2	0	0.22	14.27	12.65	161.03	1230.08474	2022-09-08 23:03:31.862	\N
1162	Soy-Lime Roasted Tofu	\N	\N	2700	45 minutes	4	12 oz tofu, cubed\n⅔ cup reduced-sodium soy sauce\n⅔ cup lime juice\n3 tbsp toasted sesame oil	4	2	Combine soy sauce, lime juice and oil in a medium bowl or large sealable plastic bag. Add the tofu and gently toss to combine. Marinate for 20 mintues.\nPreheat the oven to 450°F.\nRemove the tofu from the marinade with a slotted spoon. Spread out on 2 large baking sheets, making sure the pieces are not touching.\nRoast, gently turning halfway through, until golden brown, about 20 minutes. Serve immediately.	https://storage.googleapis.com/sg-uploads/1eb258f9c81c42f880f59586b4d5ef20.jpg	\N	396.16	14.08	0	0.83	28.59	13.08	0	702.3276108333332	2022-09-08 23:03:31.889	\N
1163	Avocado With Lemon Juice	avocado with lemon juice	\N	1800	5 minutes	3	1/2 teaspoon black pepper\n1 avocado\n2 tablespoons lemon juice	3	1	Cut avocado into bite-sized pieces.\nDrizzle with lemon juice and top with a pinch of black pepper.	https://sg-data.storage.googleapis.com/images_bucket/ce7411d3056c1e73a0a3495263632415.png	\N	272.34	3.16	0	3.73	22.08	1.76	0	181.0333337943316	2022-09-08 23:03:31.919	\N
1164	Garlic Shrimp Pasta	\N	\N	1500	25 minutes	8	1 3/4 cup chicken broth\n2 cloves garlic, minced\n3 tbsp chopped parsley\n2 tbsp lemon juice\n1 lb shrimp, peeled and deveined\n12 oz spaghetti\nSalt, to taste\nGround black pepper, to taste	8	4	Bring a large pot of lightly salted water to a strong boil. Add pasta and cook for 9 to 13 minutes, do not overcook\nMix broth, garlic, parsley, lemon juice and pepper in saucepan. Heat to a boil. Cook and stir for 2 minutes. Add shrimp and cook for 5 minutes.	https://storage.googleapis.com/sg-uploads/a67fdfa4590944bd95641ebb4a869dc5.jpg	\N	588.08	52.32	0	1.82	10.88	0.24	207	1208.3366475	2022-09-08 23:03:31.95	\N
1165	Salmon Sashimi	\N	\N	900	15 minutes	4	1 lb salmon\n1 lemon, grated and juiced\n1 tbsp olive oil\nBlack pepper, to taste	4	3	Cut wafer-thin slices on the diagonal, as you would smoked salmon.\nArrange a layer of the salmon over a large shallow dish, then spoon over a little of the lemon juice and olive oil.\nSeason with black pepper.	https://storage.googleapis.com/sg-uploads/f3c05bc08fc141178ab21a0ba1f7816f.jpg	\N	357.7	31.17	0	0.74	24.87	0.49	83.16	527.39237	2022-09-08 23:03:31.978	\N
1166	Mango Chunks	mango chunks	\N	300	5.0 min	1	1 medium mango	1	1	Peel the mango. Serve and enjoy!	https://images.unsplash.com/photo-1579246135369-ca8435a5cada?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	109.92	1.35	0	5.38	0.63	22.54	0	165	2022-09-08 23:03:32.003	\N
1167	Arroz Rojo	\N	\N	2400	40 minutes	7	1 tomato, cored\n1 tbsp olive oil\n1/2 cup minced onion\n1 clove garlic, minced\n3/4 cup white rice\n1 cup vegetable broth\n2 tbsp tomato sauce	7	3	Grate tomato into a bowl using a box grater; discard tomato skins.\nHeat vegetable oil in a heavy skillet over medium-high heat and cook onion until translucent, stirring often, about 5 minutes.\nStir garlic into onion and cook until fragrant, about 1 minute.\nStir rice into onion mixture and cook, stirring often, until rice is lightly toasted, about 3 more minutes.\nStir grated tomato, broth, and tomato sauce into the rice. Bring mixture to a boil.\nMix in jalapeno pepper, cilantro, and salt; reduce heat to low.\nCover skillet and simmer until rice has absorbed the liquid, about 15 minutes.\nTurn off heat and let rice stand covered for 8 minutes. Fluff with a fork before transferring rice to a serving dish.	https://storage.googleapis.com/sg-uploads/dba2ce46eaa74e368e84f89f3605dc36.jpg	\N	245.21	4.54	0	1.09	4.99	1.58	0	675	2022-09-08 23:03:32.028	\N
1168	Low Carb Zucchini Chips	\N	\N	7800	130 minutes	3	2 zucchini, thinly sliced\n1 tbsp olive oil\nSalt, to taste	3	1	Preheat oven to 250°F.\nArrange sliced zucchini on a baking sheet. Drizzle lightly with olive oil and sprinkle lightly with sea salt.\nBake in the preheated oven until completely dried and chip-like, about 1 hour per side. Allow to cool before serving.	https://storage.googleapis.com/sg-uploads/779421b0caad46f7a8eb979e98856203.jpg	\N	186.01	6.5	0	2.64	14.46	0	0	259.1	2022-09-08 23:03:32.053	\N
1169	Fried Salmon With Ratatouille	\N	\N	1200	20 minutes	10	8 oz salmon fillet\n3 tbsp olive oil\n1 eggplant, diced\n1 red bell pepper, chopped\n2 zucchini, diced\n1 garlic clove, peeled and finely chopped\nSalt, to taste\nBlack pepper, to taste\n1 red onion, peeled and diced\n1 cup tomato sauce	10	2	Place a saucepan on medium heat and add olive oil, the chopped garlic and fry until golden brown, add tomato sauce and bring to a boil. Reduce the heat, simmer.\nPlace frypan on heat and add olive oil, add eggplant and cook until coloured and almost soft, drain eggplant and set aside.\nPlace the pan back on heat and add olive oil, add the onion and toss, add pepper and zucchini, cook until nicely colored, remove from heat and drain oil.\nAdd the vegetables to the reduced tomato, add basil and keep warm.\nPlace grill pan on heat, brush salmon with oil, when pan is hot add salmon and grill on each side. Serve with warm ratatouille.	https://storage.googleapis.com/sg-uploads/64e11a7451f740dd9cea67cd831fb6c9.jpg	\N	569.54	30.14	0	6.11	36.54	7.47	62.37	1129.196185	2022-09-08 23:03:32.079	\N
1170	Carrot And Cabbage Slaw	carrot and cabbage slaw	\N	300	5.0 min	2	2 1/4 cups cabbage\n3 medium carrots	2	1	Wash and peel the carrots.\nGrate the carrots and mix with the cabbage slaw. Enjoy!	https://images.unsplash.com/photo-1572357312640-8438ee3ce403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80	\N	228.24	6.13	0	10.13	1.12	24.61	0	584.25	2022-09-08 23:03:32.105	\N
1171	Edamame	edamame	\N	300	5.0 min	1	3/4 cup frozen edamame in the pod	1	1	Place edamame in a microwave-safe container.\nHeat on high for 3 minutes.\nLet cool for a minute then serve.	https://images.unsplash.com/photo-1575262599410-837a72005862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1399&q=80	\N	104.33	9.93	0	4.25	4.19	2.19	0	88.5	2022-09-08 23:03:32.134	\N
1172	Zucchini Spears	zucchini spears	\N	300	5.0 min	1	1 medium zucchini	1	1	Trim ends of zucchini.\nCut in half, widthwise, then cut each half into 4 spears.\nEnjoy!	https://images.unsplash.com/photo-1499125650409-2c437d5cca77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80	\N	25	1.5	0	1.96	0.4	3.1	0	124	2022-09-08 23:03:32.188	\N
1175	Bacon Avocado Fries	\N	\N	1200	20 minutes	2	2 avocados\n6 oz bacon, striped	2	3	Preheat oven to 425ºF.\nSlice each avocado into wedges. Wrap each wedge in bacon, cutting the bacon if needed. Place on a baking sheet, seam side down.\nBake until bacon is cooked through and crispy, 15 minutes.	https://storage.googleapis.com/sg-uploads/4faeb31c365f4b1fa1bf801579d3d501.jpg	\N	236.53	13.52	0	6.7	16.15	1.17	27.22	470.09713875	2022-09-08 23:03:32.287	\N
1176	Celery With Peanut Butter	celery with peanut butter	\N	300	5 minutes	2	1 cup celery\n2 tablespoons peanut butter	2	1	Use the celery sticks to dip into the peanut butter or spread the peanut butter on the celery sticks before serving them on a platter.	https://sg-data.storage.googleapis.com/images_bucket/fbaf6cb4267ad3fffff807371561dbf9.png	\N	222.83	7.86	0	3.22	16.74	4.74	0	133.25	2022-09-08 23:03:32.312	\N
1177	Dried Mango Slices	dried mango slices	\N	300	5.0 min	1	1 medium mango	1	1	Serve the slices of dried mango. Enjoy!	https://images.unsplash.com/photo-1550825570-8ae96cf12d87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	109.92	1.35	0	5.38	0.63	22.54	0	165	2022-09-08 23:03:32.338	\N
\.


--
-- Data for Name: RecipeCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RecipeCategory" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Lunch	\N	2022-09-08 21:07:08.995	\N
2	Dinner	\N	2022-09-08 21:07:08.995	\N
3	Breakfast	\N	2022-09-08 21:07:08.996	\N
4	Snack	\N	2022-09-08 21:07:09	\N
\.


--
-- Data for Name: RecipeKeyword; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RecipeKeyword" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: _CuisineToRecipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_CuisineToRecipe" ("A", "B") FROM stdin;
1	1076
1	1077
1	1078
2	1079
1	1080
1	1081
1	1082
1	1083
1	1084
1	1085
1	1086
1	1087
1	1088
1	1089
1	1090
1	1091
1	1092
5	1093
1	1094
1	1095
1	1096
1	1097
4	1098
6	1098
1	1099
6	1100
1	1101
1	1102
1	1103
1	1104
1	1105
1	1106
8	1107
1	1108
11	1109
6	1110
7	1110
1	1111
12	1112
2	1113
1	1114
1	1115
1	1116
1	1117
1	1118
1	1119
1	1120
1	1121
1	1122
1	1123
1	1124
1	1125
1	1126
4	1127
9	1127
1	1128
1	1129
1	1130
1	1131
1	1132
1	1133
1	1134
1	1135
1	1136
1	1137
1	1138
1	1139
1	1140
1	1141
9	1142
1	1143
1	1144
1	1145
1	1146
1	1147
1	1148
1	1149
1	1150
1	1151
1	1152
4	1153
1	1154
1	1155
1	1156
6	1157
1	1158
1	1159
1	1160
1	1161
1	1162
1	1163
1	1164
5	1165
1	1166
6	1167
10	1167
1	1168
1	1169
1	1170
1	1171
1	1172
1	1173
1	1174
1	1175
1	1176
1	1177
\.


--
-- Data for Name: _IngredientToIngredientCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_IngredientToIngredientCategory" ("A", "B") FROM stdin;
3	1
4	1
24	1
27	1
28	1
37	1
42	1
43	1
51	1
62	1
66	1
69	1
72	1
86	1
92	1
93	1
95	1
111	1
122	1
5	2
16	2
20	2
21	2
22	2
23	2
34	2
48	2
56	2
58	2
63	2
64	2
67	2
68	2
76	2
7	3
77	2
12	3
91	2
13	3
94	2
14	3
100	2
106	2
108	2
29	3
121	2
30	3
31	3
32	3
87	3
88	3
89	3
90	3
97	3
101	3
113	3
2	4
19	4
25	4
26	4
38	4
50	4
52	4
59	4
61	4
71	4
75	4
81	4
103	4
110	4
15	5
18	5
33	5
45	5
54	5
57	5
65	5
73	5
74	5
78	5
85	5
98	5
102	5
104	5
107	5
109	5
112	5
116	5
120	5
1	6
6	6
8	6
9	6
10	6
11	6
17	6
35	6
36	6
39	6
40	6
41	6
44	6
46	6
47	6
49	6
53	6
55	6
60	6
70	6
79	6
80	6
82	6
83	6
84	6
96	6
99	6
105	6
114	6
115	6
117	6
118	6
119	6
\.


--
-- Data for Name: _IngredientToRecipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_IngredientToRecipe" ("A", "B") FROM stdin;
10	1076
21	1076
27	1076
53	1076
56	1076
77	1076
79	1076
93	1076
96	1076
98	1076
119	1076
15	1077
25	1077
52	1077
57	1077
75	1077
77	1077
78	1077
89	1077
91	1077
98	1077
12	1078
15	1078
19	1078
77	1078
79	1078
91	1078
98	1078
15	1079
19	1079
56	1079
75	1079
77	1079
91	1079
98	1079
117	1079
1	1080
19	1080
20	1080
64	1080
67	1080
75	1080
91	1080
98	1080
15	1081
52	1081
53	1081
58	1081
77	1081
98	1081
113	1081
39	1082
52	1082
76	1082
77	1082
93	1082
98	1082
106	1082
7	1083
15	1083
19	1083
53	1083
91	1083
98	1083
100	1083
103	1083
12	1084
15	1084
21	1084
53	1084
56	1084
60	1084
79	1084
96	1084
98	1084
99	1084
104	1084
26	1085
42	1085
52	1085
77	1085
98	1085
122	1085
1	1086
15	1086
19	1086
21	1086
53	1086
76	1086
77	1086
79	1086
98	1086
117	1086
7	1087
15	1087
52	1087
59	1087
75	1087
98	1087
52	1088
53	1088
68	1088
96	1088
98	1088
15	1089
22	1089
52	1089
53	1089
75	1089
79	1089
98	1089
15	1090
16	1090
53	1090
58	1090
65	1090
88	1090
91	1090
98	1090
104	1090
112	1090
12	1091
15	1091
17	1091
20	1091
21	1091
52	1091
56	1091
77	1091
93	1091
98	1091
111	1091
112	1091
16	1092
21	1092
31	1092
42	1092
53	1092
58	1092
60	1092
76	1092
104	1092
53	1093
56	1093
76	1093
77	1093
96	1093
98	1093
122	1093
15	1094
52	1094
53	1094
77	1094
91	1094
98	1094
106	1094
10	1095
15	1095
53	1095
58	1095
76	1095
96	1095
98	1095
119	1095
122	1095
15	1096
42	1096
53	1096
96	1096
98	1096
111	1096
121	1096
122	1096
52	1097
53	1097
74	1097
77	1097
79	1097
91	1097
97	1097
15	1098
29	1098
53	1098
59	1098
76	1098
98	1098
119	1098
15	1099
22	1099
36	1099
53	1099
56	1099
69	1099
77	1099
98	1099
15	1100
38	1100
52	1100
53	1100
98	1100
53	1101
75	1101
91	1101
95	1101
97	1101
98	1101
103	1101
106	1101
15	1102
53	1102
58	1102
69	1102
80	1102
98	1102
113	1102
15	1103
52	1103
53	1103
77	1103
98	1103
122	1103
15	1104
19	1104
52	1104
58	1104
98	1104
100	1104
106	1104
21	1105
52	1105
53	1105
55	1105
98	1105
1	1106
15	1106
19	1106
31	1106
53	1106
76	1106
98	1106
100	1106
53	1107
56	1107
77	1107
96	1107
98	1107
112	1107
117	1107
4	1108
27	1108
52	1108
53	1108
76	1108
121	1108
15	1109
19	1109
20	1109
49	1109
77	1109
98	1109
52	1110
56	1110
60	1110
64	1110
87	1110
104	1110
3	1111
19	1111
21	1111
29	1111
45	1111
53	1111
77	1111
91	1111
15	1112
52	1112
53	1112
77	1112
98	1112
106	1112
15	1113
53	1113
56	1113
79	1113
84	1113
98	1113
111	1113
112	1113
122	1113
15	1114
52	1114
75	1114
79	1114
98	1114
110	1114
19	1115
53	1115
58	1115
98	1115
101	1115
7	1116
27	1116
52	1116
53	1116
79	1116
15	1117
52	1117
53	1117
91	1117
94	1117
98	1117
53	1118
69	1118
79	1118
97	1118
98	1118
114	1118
10	1119
15	1119
52	1119
53	1119
79	1119
98	1119
106	1119
15	1120
19	1120
52	1120
97	1120
98	1120
15	1121
16	1121
21	1121
22	1121
69	1121
79	1121
97	1121
98	1121
117	1121
16	1122
52	1122
53	1122
91	1122
117	1122
15	1123
53	1123
56	1123
77	1123
98	1123
105	1123
113	1123
15	1124
53	1124
56	1124
79	1124
95	1124
98	1124
105	1124
70	1125
99	1125
104	1125
110	1125
15	1126
19	1126
52	1126
69	1126
79	1126
98	1126
15	1127
53	1127
56	1127
97	1127
98	1127
108	1127
10	1128
53	1128
58	1128
77	1128
98	1128
122	1128
4	1129
7	1129
15	1129
52	1129
98	1129
4	1130
36	1130
53	1130
56	1130
77	1130
79	1130
101	1130
111	1130
15	1131
27	1131
53	1131
58	1131
69	1131
98	1131
101	1131
122	1131
21	1132
31	1132
38	1132
53	1132
111	1132
122	1132
15	1133
27	1133
52	1133
53	1133
79	1133
98	1133
15	1134
53	1134
98	1134
122	1134
52	1135
15	1136
16	1136
29	1136
31	1136
53	1136
56	1136
96	1136
98	1136
121	1136
15	1137
53	1137
69	1137
79	1137
96	1137
98	1137
113	1137
7	1138
27	1138
52	1138
53	1138
79	1138
4	1139
23	1139
43	1139
53	1139
69	1139
98	1139
113	1139
53	1140
58	1140
76	1140
79	1140
104	1140
10	1141
15	1141
42	1141
74	1141
84	1141
93	1141
113	1141
15	1142
19	1142
53	1142
56	1142
69	1142
79	1142
101	1142
3	1143
15	1143
63	1143
65	1143
69	1143
74	1143
79	1143
98	1143
15	1144
52	1144
53	1144
69	1144
79	1144
91	1144
98	1144
122	1144
4	1145
15	1145
27	1145
41	1145
70	1145
98	1145
113	1145
4	1146
4	1147
7	1147
15	1147
98	1147
2	1148
3	1148
86	1149
15	1150
21	1150
29	1150
53	1150
56	1150
79	1150
91	1150
98	1150
121	1150
10	1151
15	1151
53	1151
56	1151
84	1151
98	1151
111	1151
112	1151
113	1151
16	1152
56	1152
77	1152
98	1152
99	1152
101	1152
104	1152
15	1153
53	1153
58	1153
69	1153
79	1153
98	1153
101	1153
122	1153
4	1154
23	1154
43	1154
53	1154
69	1154
98	1154
113	1154
17	1155
31	1155
38	1155
53	1155
60	1155
67	1155
95	1155
108	1155
114	1155
15	1156
53	1156
54	1156
58	1156
63	1156
82	1156
15	1157
22	1157
44	1157
53	1157
98	1157
4	1158
7	1158
4	1159
111	1159
43	1160
15	1161
32	1161
53	1161
98	1161
109	1161
70	1162
99	1162
104	1162
110	1162
4	1163
15	1163
69	1163
15	1164
31	1164
56	1164
69	1164
79	1164
98	1164
101	1164
105	1164
15	1165
53	1165
69	1165
97	1165
72	1166
53	1167
56	1167
77	1167
96	1167
111	1167
112	1167
117	1167
53	1168
98	1168
122	1168
15	1169
51	1169
53	1169
56	1169
93	1169
94	1169
97	1169
98	1169
112	1169
122	1169
20	1170
21	1170
48	1171
122	1172
2	1173
3	1173
16	1174
4	1175
7	1175
23	1176
81	1176
72	1177
\.


--
-- Data for Name: _RecipeToRecipeCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_RecipeToRecipeCategory" ("A", "B") FROM stdin;
1076	1
1076	2
1077	3
1078	1
1078	2
1079	1
1079	2
1080	1
1080	2
1081	3
1082	1
1082	2
1083	1
1083	2
1084	1
1084	2
1085	4
1086	1
1086	2
1087	3
1088	1
1088	2
1089	3
1090	1
1090	2
1091	1
1091	2
1092	1
1092	2
1092	4
1093	1
1093	2
1094	1
1094	2
1095	1
1095	2
1096	1
1096	2
1097	1
1097	2
1098	1
1098	2
1099	1
1099	2
1100	3
1101	1
1101	2
1102	1
1102	2
1103	3
1104	3
1105	4
1106	1
1106	2
1107	4
1108	3
1109	1
1109	2
1110	1
1110	2
1111	1
1111	2
1112	3
1113	1
1113	2
1114	3
1115	1
1115	2
1116	3
1117	1
1117	2
1118	1
1118	2
1119	3
1120	3
1121	1
1121	2
1123	1
1123	2
1124	1
1124	2
1125	1
1125	2
1126	3
1127	1
1127	2
1128	1
1128	2
1129	3
1130	4
1131	1
1131	2
1132	2
1133	3
1134	4
1135	4
1136	1
1136	2
1137	1
1137	2
1138	3
1139	2
1140	1
1140	2
1141	1
1141	2
1142	4
1143	4
1144	3
1145	4
1146	4
1147	3
1148	4
1149	4
1150	1
1150	2
1151	1
1151	2
1152	1
1152	2
1153	1
1153	2
1154	2
1155	2
1156	1
1156	2
1157	1
1157	2
1158	4
1159	4
1160	4
1161	1
1161	2
1162	1
1162	2
1163	3
1164	1
1164	2
1165	1
1165	2
1166	4
1167	1
1167	2
1168	4
1169	1
1169	2
1170	4
1171	4
1172	4
1173	4
1174	4
1175	4
1176	4
\.


--
-- Data for Name: _RecipeToRecipeKeyword; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_RecipeToRecipeKeyword" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
b500b09d-ce98-46c8-852d-a288aed20df4	3d0a91b8cf206629a6942d83cab44267ac944c39edba4d37cfdb4d1bda232cf2	2022-09-08 21:06:41.08574+00	20220908170606_initialize_ingredeck_database_v2	\N	\N	2022-09-08 21:06:41.059674+00	1
\.


--
-- Name: Cuisine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Cuisine_id_seq"', 12, true);


--
-- Name: IngredientCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."IngredientCategory_id_seq"', 6, true);


--
-- Name: Ingredient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ingredient_id_seq"', 122, true);


--
-- Name: RecipeCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RecipeCategory_id_seq"', 4, true);


--
-- Name: RecipeKeyword_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RecipeKeyword_id_seq"', 1, false);


--
-- Name: Recipe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Recipe_id_seq"', 1177, true);


--
-- Name: Cuisine Cuisine_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cuisine"
    ADD CONSTRAINT "Cuisine_pkey" PRIMARY KEY (id);


--
-- Name: IngredientCategory IngredientCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."IngredientCategory"
    ADD CONSTRAINT "IngredientCategory_pkey" PRIMARY KEY (id);


--
-- Name: Ingredient Ingredient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredient"
    ADD CONSTRAINT "Ingredient_pkey" PRIMARY KEY (id);


--
-- Name: RecipeCategory RecipeCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeCategory"
    ADD CONSTRAINT "RecipeCategory_pkey" PRIMARY KEY (id);


--
-- Name: RecipeKeyword RecipeKeyword_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecipeKeyword"
    ADD CONSTRAINT "RecipeKeyword_pkey" PRIMARY KEY (id);


--
-- Name: Recipe Recipe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: _CuisineToRecipe_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_CuisineToRecipe_AB_unique" ON public."_CuisineToRecipe" USING btree ("A", "B");


--
-- Name: _CuisineToRecipe_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_CuisineToRecipe_B_index" ON public."_CuisineToRecipe" USING btree ("B");


--
-- Name: _IngredientToIngredientCategory_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_IngredientToIngredientCategory_AB_unique" ON public."_IngredientToIngredientCategory" USING btree ("A", "B");


--
-- Name: _IngredientToIngredientCategory_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_IngredientToIngredientCategory_B_index" ON public."_IngredientToIngredientCategory" USING btree ("B");


--
-- Name: _IngredientToRecipe_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_IngredientToRecipe_AB_unique" ON public."_IngredientToRecipe" USING btree ("A", "B");


--
-- Name: _IngredientToRecipe_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_IngredientToRecipe_B_index" ON public."_IngredientToRecipe" USING btree ("B");


--
-- Name: _RecipeToRecipeCategory_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_RecipeToRecipeCategory_AB_unique" ON public."_RecipeToRecipeCategory" USING btree ("A", "B");


--
-- Name: _RecipeToRecipeCategory_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_RecipeToRecipeCategory_B_index" ON public."_RecipeToRecipeCategory" USING btree ("B");


--
-- Name: _RecipeToRecipeKeyword_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_RecipeToRecipeKeyword_AB_unique" ON public."_RecipeToRecipeKeyword" USING btree ("A", "B");


--
-- Name: _RecipeToRecipeKeyword_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_RecipeToRecipeKeyword_B_index" ON public."_RecipeToRecipeKeyword" USING btree ("B");


--
-- Name: _CuisineToRecipe _CuisineToRecipe_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_CuisineToRecipe"
    ADD CONSTRAINT "_CuisineToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES public."Cuisine"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CuisineToRecipe _CuisineToRecipe_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_CuisineToRecipe"
    ADD CONSTRAINT "_CuisineToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IngredientToIngredientCategory _IngredientToIngredientCategory_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_IngredientToIngredientCategory"
    ADD CONSTRAINT "_IngredientToIngredientCategory_A_fkey" FOREIGN KEY ("A") REFERENCES public."Ingredient"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IngredientToIngredientCategory _IngredientToIngredientCategory_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_IngredientToIngredientCategory"
    ADD CONSTRAINT "_IngredientToIngredientCategory_B_fkey" FOREIGN KEY ("B") REFERENCES public."IngredientCategory"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IngredientToRecipe _IngredientToRecipe_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_IngredientToRecipe"
    ADD CONSTRAINT "_IngredientToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES public."Ingredient"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IngredientToRecipe _IngredientToRecipe_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_IngredientToRecipe"
    ADD CONSTRAINT "_IngredientToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RecipeToRecipeCategory _RecipeToRecipeCategory_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_RecipeToRecipeCategory"
    ADD CONSTRAINT "_RecipeToRecipeCategory_A_fkey" FOREIGN KEY ("A") REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RecipeToRecipeCategory _RecipeToRecipeCategory_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_RecipeToRecipeCategory"
    ADD CONSTRAINT "_RecipeToRecipeCategory_B_fkey" FOREIGN KEY ("B") REFERENCES public."RecipeCategory"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RecipeToRecipeKeyword _RecipeToRecipeKeyword_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_RecipeToRecipeKeyword"
    ADD CONSTRAINT "_RecipeToRecipeKeyword_A_fkey" FOREIGN KEY ("A") REFERENCES public."Recipe"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RecipeToRecipeKeyword _RecipeToRecipeKeyword_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_RecipeToRecipeKeyword"
    ADD CONSTRAINT "_RecipeToRecipeKeyword_B_fkey" FOREIGN KEY ("B") REFERENCES public."RecipeKeyword"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

