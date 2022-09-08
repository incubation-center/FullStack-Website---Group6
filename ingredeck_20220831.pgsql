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
    "nutrientsPerServing" jsonb NOT NULL,
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
1	Italian	\N	2022-08-30 20:00:16.692	\N
2	World	\N	2022-08-30 20:00:16.693	\N
3	Spanish	\N	2022-08-30 20:00:16.694	\N
4	Chinese	\N	2022-08-30 20:00:16.695	\N
5	Japanese	\N	2022-08-30 20:00:16.696	\N
6	American	\N	2022-08-30 20:00:16.697	\N
7	Kid-Friendly	\N	2022-08-30 20:00:16.709	\N
8	Greek	\N	2022-08-30 20:00:16.709	\N
9	Polish	\N	2022-08-30 20:00:16.718	\N
10	Turkish	\N	2022-08-30 20:00:16.719	\N
11	Mediterranean	\N	2022-08-30 20:00:16.72	\N
12	Mexican	\N	2022-08-30 20:00:16.721	\N
\.


--
-- Data for Name: Ingredient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Ingredient" (id, name, description, icon, "createdAt", "updatedAt") FROM stdin;
1	All-purpose flour	\N	\N	2022-08-30 20:00:20.864	\N
2	Almond butter	\N	\N	2022-08-30 20:00:20.865	\N
3	Apple	\N	\N	2022-08-30 20:00:20.866	\N
4	Avocado	\N	\N	2022-08-30 20:00:20.868	\N
5	Avocado oil	\N	\N	2022-08-30 20:00:20.87	\N
6	Baby spinach leaves	\N	\N	2022-08-30 20:00:20.871	\N
7	Bacon	\N	\N	2022-08-30 20:00:20.891	\N
8	Baking powder	\N	\N	2022-08-30 20:00:20.892	\N
9	Basil	\N	\N	2022-08-30 20:00:20.893	\N
10	Baking soda	\N	\N	2022-08-30 20:00:20.894	\N
11	Bay leaves	\N	\N	2022-08-30 20:00:20.894	\N
12	Beef	\N	\N	2022-08-30 20:00:20.896	\N
13	Beef broth	\N	\N	2022-08-30 20:00:20.91	\N
14	Beef stew meat	\N	\N	2022-08-30 20:00:20.912	\N
15	Black pepper	\N	\N	2022-08-30 20:00:20.913	\N
16	Broccoli	\N	\N	2022-08-30 20:00:20.914	\N
17	Brown sugar	\N	\N	2022-08-30 20:00:20.915	\N
18	Brown rice	\N	\N	2022-08-30 20:00:20.916	\N
19	Butter	\N	\N	2022-08-30 20:00:20.926	\N
20	Cabbage	\N	\N	2022-08-30 20:00:20.927	\N
21	Carrots	\N	\N	2022-08-30 20:00:20.936	\N
22	Cauliflower	\N	\N	2022-08-30 20:00:20.936	\N
23	Celery	\N	\N	2022-08-30 20:00:20.937	\N
24	Chayote	\N	\N	2022-08-30 20:00:20.938	\N
25	Cheddar cheese	\N	\N	2022-08-30 20:00:20.942	\N
26	Cheese	\N	\N	2022-08-30 20:00:20.943	\N
27	Cherries	\N	\N	2022-08-30 20:00:20.96	\N
28	Cherry tomatoes	\N	\N	2022-08-30 20:00:20.961	\N
29	Chicken	\N	\N	2022-08-30 20:00:20.962	\N
30	Chicken breasts	\N	\N	2022-08-30 20:00:20.964	\N
31	Chicken broth	\N	\N	2022-08-30 20:00:20.966	\N
32	Chicken thighs	\N	\N	2022-08-30 20:00:20.967	\N
33	Chili pepper	\N	\N	2022-08-30 20:00:20.982	\N
34	Chives	\N	\N	2022-08-30 20:00:20.983	\N
35	Cilantro	\N	\N	2022-08-30 20:00:20.984	\N
36	Cinnamon	\N	\N	2022-08-30 20:00:20.985	\N
37	Coconut	\N	\N	2022-08-30 20:00:20.989	\N
38	Coconut milk	\N	\N	2022-08-30 20:00:20.991	\N
39	Coconut oil	\N	\N	2022-08-30 20:00:21.005	\N
40	Cooking oil	\N	\N	2022-08-30 20:00:21.005	\N
41	Coriander	\N	\N	2022-08-30 20:00:21.006	\N
42	Corn	\N	\N	2022-08-30 20:00:21.007	\N
43	Cucumbers	\N	\N	2022-08-30 20:00:21.009	\N
44	Cumin	\N	\N	2022-08-30 20:00:21.011	\N
45	Curry	\N	\N	2022-08-30 20:00:21.023	\N
46	Dill	\N	\N	2022-08-30 20:00:21.028	\N
47	Dry pasta	\N	\N	2022-08-30 20:00:21.028	\N
48	Edamame	\N	\N	2022-08-30 20:00:21.029	\N
49	Egg noodles	\N	\N	2022-08-30 20:00:21.03	\N
50	Egg whites	\N	\N	2022-08-30 20:00:21.032	\N
51	Eggplant	\N	\N	2022-08-30 20:00:21.036	\N
52	Eggs	\N	\N	2022-08-30 20:00:21.047	\N
53	Olive oil	\N	\N	2022-08-30 20:00:21.048	\N
54	Fish sauce	\N	\N	2022-08-30 20:00:21.049	\N
55	Flour	\N	\N	2022-08-30 20:00:21.05	\N
56	Garlic	\N	\N	2022-08-30 20:00:21.053	\N
57	Garlic cloves	\N	\N	2022-08-30 20:00:21.054	\N
58	Garlic powder	\N	\N	2022-08-30 20:00:21.064	\N
59	Ghee	\N	\N	2022-08-30 20:00:21.065	\N
60	Ginger	\N	\N	2022-08-30 20:00:21.068	\N
61	Green bell pepper	\N	\N	2022-08-30 20:00:21.07	\N
62	Grated parmesan cheese	\N	\N	2022-08-30 20:00:21.071	\N
63	Green cabbage	\N	\N	2022-08-30 20:00:21.073	\N
64	Green onions	\N	\N	2022-08-30 20:00:21.082	\N
65	Honey	\N	\N	2022-08-30 20:00:21.082	\N
66	Hot pepper	\N	\N	2022-08-30 20:00:21.084	\N
67	Kale	\N	\N	2022-08-30 20:00:21.088	\N
68	Kimchi	\N	\N	2022-08-30 20:00:21.089	\N
69	Lemon	\N	\N	2022-08-30 20:00:21.093	\N
70	Lime juice	\N	\N	2022-08-30 20:00:21.103	\N
71	Low-fat milk	\N	\N	2022-08-30 20:00:21.104	\N
72	Mango	\N	\N	2022-08-30 20:00:21.106	\N
73	Margarine	\N	\N	2022-08-30 20:00:21.109	\N
74	Mayonnaise	\N	\N	2022-08-30 20:00:21.111	\N
75	Milk	\N	\N	2022-08-30 20:00:21.114	\N
76	Mushrooms	\N	\N	2022-08-30 20:00:21.124	\N
77	Onion	\N	\N	2022-08-30 20:00:21.125	\N
78	Onion powder	\N	\N	2022-08-30 20:00:21.125	\N
79	Parsley	\N	\N	2022-08-30 20:00:21.127	\N
80	Pasta	\N	\N	2022-08-30 20:00:21.129	\N
81	Peanut butter	\N	\N	2022-08-30 20:00:21.132	\N
82	Peanuts	\N	\N	2022-08-30 20:00:21.135	\N
83	Pecans	\N	\N	2022-08-30 20:00:21.144	\N
84	Penne	\N	\N	2022-08-30 20:00:21.146	\N
85	Pepper	\N	\N	2022-08-30 20:00:21.147	\N
86	Pineapple	\N	\N	2022-08-30 20:00:21.149	\N
87	Pork	\N	\N	2022-08-30 20:00:21.151	\N
88	Pork chops	\N	\N	2022-08-30 20:00:21.156	\N
89	Pork sausage	\N	\N	2022-08-30 20:00:21.158	\N
90	Pork shoulder	\N	\N	2022-08-30 20:00:21.168	\N
91	Potato	\N	\N	2022-08-30 20:00:21.169	\N
92	Raisins	\N	\N	2022-08-30 20:00:21.169	\N
93	Red bell pepper	\N	\N	2022-08-30 20:00:21.171	\N
94	Red onion	\N	\N	2022-08-30 20:00:21.173	\N
95	Red pepper	\N	\N	2022-08-30 20:00:21.175	\N
96	Rice	\N	\N	2022-08-30 20:00:21.184	\N
97	Salmon	\N	\N	2022-08-30 20:00:21.185	\N
98	Salt	\N	\N	2022-08-30 20:00:21.186	\N
99	Sesame oil	\N	\N	2022-08-30 20:00:21.19	\N
100	Shallots	\N	\N	2022-08-30 20:00:21.192	\N
101	Shrimp	\N	\N	2022-08-30 20:00:21.195	\N
102	Smoked paprika	\N	\N	2022-08-30 20:00:21.203	\N
103	Sour cream	\N	\N	2022-08-30 20:00:21.204	\N
104	Soy sauce	\N	\N	2022-08-30 20:00:21.205	\N
105	Spaghetti	\N	\N	2022-08-30 20:00:21.207	\N
106	Spinach	\N	\N	2022-08-30 20:00:21.209	\N
107	Sugar	\N	\N	2022-08-30 20:00:21.211	\N
108	Sweet potatoes	\N	\N	2022-08-30 20:00:21.212	\N
109	Teriyaki sauce	\N	\N	2022-08-30 20:00:21.261	\N
110	Tofu	\N	\N	2022-08-30 20:00:21.262	\N
111	Tomato	\N	\N	2022-08-30 20:00:21.262	\N
112	Tomato sauce	\N	\N	2022-08-30 20:00:21.263	\N
113	Tuna	\N	\N	2022-08-30 20:00:21.263	\N
114	Turmeric	\N	\N	2022-08-30 20:00:21.264	\N
115	Veget soup mix	\N	\N	2022-08-30 20:00:21.284	\N
116	Vanilla extract	\N	\N	2022-08-30 20:00:21.285	\N
117	Vegetable broth	\N	\N	2022-08-30 20:00:21.285	\N
118	Vegetable oil	\N	\N	2022-08-30 20:00:21.286	\N
119	Water	\N	\N	2022-08-30 20:00:21.287	\N
120	Worchestire sauce	\N	\N	2022-08-30 20:00:21.288	\N
121	Yellow onion	\N	\N	2022-08-30 20:00:21.298	\N
122	Zucchini	\N	\N	2022-08-30 20:00:21.299	\N
\.


--
-- Data for Name: IngredientCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."IngredientCategory" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Fruits	\N	2022-08-30 20:39:00.232	\N
2	Vegetables	\N	2022-08-30 20:39:00.233	\N
3	Meats	\N	2022-08-30 20:39:00.235	\N
4	Dairy & Dairy-Free	\N	2022-08-30 20:39:00.236	\N
5	Others	\N	2022-08-30 20:39:00.238	\N
6	Sauces & Seasonings	\N	2022-08-30 20:39:00.239	\N
\.


--
-- Data for Name: Recipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Recipe" (id, name, "cleanName", description, "durationSecond", "durationString", "ingredientCount", "ingredientLine", "ingredientLineCount", "numberOfServings", instruction, "imageLink", "videoLink", "nutrientsPerServing", "weightGram", "createdAt", "updatedAt") FROM stdin;
1	Vegetarian Risotto	\N	\N	3000	50 minutes	11	1 cup rice\n1½ cups water\n2 tbsp olive oil\n7 oz onion, chopped\n2 tsp garlic, minced\n7 oz carrots, chopped\n6 oz red bell pepper, sliced\n4 oz cherry tomatoes, halved\nSalt, to taste\nParsley, to taste\nBasil, to taste	11	2	\N	https://storage.googleapis.com/sg-uploads/648f99b36acf4828b5ebc0273863ebac.jpg	\N	{"fat": 14.95, "carbs": 88.24, "fiber": 12.07, "sugar": 15.67, "protein": 16.46, "calories": 553.4, "cholesterol": 0}	1294.37090975	2022-08-30 20:01:04.32	\N
2	Hash Browns	\N	\N	4500	minutes	10	3/4 lb hash brown potatoes\n1/2 lb pork sausage, sliced\n1 onion, diced\n3 eggs\n1/4 cup milk\n1 tsp onion powder\n1 tsp garlic powder\n4 oz shredded cheddar cheese\nSalt, to taste\nGround black pepper, to taste	10	4	\N	https://storage.googleapis.com/sg-uploads/2f32a71314734f7a99d2b750c777b106.jpg	\N	{"fat": 40.18, "carbs": 37.95, "fiber": 3.71, "sugar": 3.93, "protein": 23.52, "calories": 607.43, "cholesterol": 205.95}	1064.821888333333	2022-08-30 20:01:04.321	\N
3	Vegan Potato Gratin 	\N	\N	2700	45 minutes	8	10 oz potatoes, peeled and sliced\n3 tbsp vegan butter\n2 cloves garlic, minced\n1 onion, finely chopped\n1/2 cup milk\n1 cup vegetable broth\nSalt, to taste\nBlack pepper, to taste	8	2	\N	https://storage.googleapis.com/sg-uploads/ec16cba38a104153b7ceab04297801e6.jpg	\N	{"fat": 18.77, "carbs": 35.08, "fiber": 5.5, "sugar": 10.68, "protein": 6.83, "calories": 336.6, "cholesterol": 52.14}	859.3952312499999	2022-08-30 20:01:04.324	\N
4	Mashed Potato With Kale, Cabbage And Green Onion	\N	\N	2700	45 minutes	8	6 big potatoes, peeled and cut\nSalt, to taste\n4 tbsp unsalted butter\n4 cups chopped kale\n2 cups chopped cabbage\n3 green onions, minced\n1 cup milk\n4 tbsp all-purpose flour	8	2	\N	https://storage.googleapis.com/sg-uploads/47866df8497d439a8dceaab0d17caeff.jpg	\N	{"fat": 26.95, "carbs": 50.99, "fiber": 13.16, "sugar": 15.46, "protein": 16.75, "calories": 513.45, "cholesterol": 72.12}	1187.25	2022-08-30 20:01:04.325	\N
5	Tuna-Garlic Omelette	\N	\N	1200	20 minutes	7	3 tbsp olive oil\n3 garlic cloves, minced\n1 onion, chopped\n6 eggs, beaten\n6 oz tuna, chopped\nSalt, to taste\nFreshly ground black pepper, to taste	7	2	\N	https://storage.googleapis.com/sg-uploads/78f4e0cbf67948f9bd36ad0f51abab0f.jpg	\N	{"fat": 35.49, "carbs": 10.79, "fiber": 1.65, "sugar": 3.95, "protein": 38.55, "calories": 516.77, "cholesterol": 597.97}	693.49713875	2022-08-30 20:01:04.327	\N
6	Corned Beef Hash	\N	\N	3600	60 minutes	7	2 tbsp butter\n1 onion, chopped\n1/2 cup chopped corned beef\n2 cups chopped potatoes\nSalt, to taste\nBlack pepper, to taste\nParsley, to garnish	7	1	\N	https://storage.googleapis.com/sg-uploads/16b0e3bcc93140f58cfd0c1b8111fc11.jpg	\N	{"fat": 40.98, "carbs": 26.56, "fiber": 8.99, "sugar": 7.33, "protein": 22.41, "calories": 564.7, "cholesterol": 122.24}	439.675	2022-08-30 20:01:04.329	\N
7	Spinach-Mushroom Pepper Egg Muffins	\N	\N	2100	35 minutes	7	1-2 tsp virgin coconut oil\n½ onion, minced\n1 red bell pepper, diced\n3 mushrooms, sliced\n1 handful spinach, sliced thinly\n6-7 eggs\n¼ tsp sea salt	7	1	\N	https://storage.googleapis.com/sg-uploads/bd1586dabf09458583be8f8875dc662c.jpg	\N	{"fat": 10.33, "carbs": 19.71, "fiber": 5.08, "sugar": 8.85, "protein": 15.46, "calories": 233.6, "cholesterol": 186}	379.549523125	2022-08-30 20:01:04.342	\N
8	Hasselback Potato	\N	\N	4500	75 minutes	8	6 potatoes\n3 tbsp olive oil\n3 tbsp butter\nSalt, to taste\nBlack pepper, to taste\n4 oz bacon, sliced\n1 cup sour cream\n1 shallot, chopped	8	2	\N	https://storage.googleapis.com/sg-uploads/0e82a36693d442df92730b85f3a6c407.jpg	\N	{"fat": 51.34, "carbs": 24.69, "fiber": 3.3, "sugar": 1.18, "protein": 18.9, "calories": 636.45, "cholesterol": 113.22}	672.3605925	2022-08-30 20:01:04.345	\N
9	Spicy Rice	\N	\N	1800	30 minutes	11	2 tbsp olive oil\n2 carrots, grated\n1 tsp minced garlic\n8 oz ground beef\nSalt, to taste\nBlack pepper, to taste\n1/2 cup rice\n1 tbsp sesame oil\n2 tbsp soy sauce\n2 tbsp chopped parsley\n1 tsp minced ginger	11	3	\N	https://storage.googleapis.com/sg-uploads/c24df954f29646119e12e4a686cb6ac9.jpg	\N	{"fat": 23.65, "carbs": 29.78, "fiber": 4.44, "sugar": 4.95, "protein": 20.88, "calories": 415.47, "cholesterol": 46.87}	662.3961850000001	2022-08-30 20:01:04.346	\N
10	Zucchini Egg Muffins	\N	\N	1800	30 minutes	6	2 cups sliced zucchini\n1/4 cup chopped onion\n1/2 cup feta crumbled cheese\n2 eggs, beaten\n3 tbsp canned corn\nSalt, to taste	6	2	\N	https://storage.googleapis.com/sg-uploads/a2ccc8f288b34d9dafacd38500acb16d.jpg	\N	{"fat": 11.44, "carbs": 10.5, "fiber": 2.94, "sugar": 2.88, "protein": 14.2, "calories": 201.75, "cholesterol": 210.92}	468.7875	2022-08-30 20:01:04.347	\N
11	Oven Scrambled Eggs With Bacon	\N	\N	2100	35 minutes	6	1/3 cup ghee\n10 eggs\n3/4 cup milk\n12 oz bacon\nSalt, to taste\nGround black pepper, to taste	6	4	\N	https://storage.googleapis.com/sg-uploads/7a37dfa584854f2aaa662c9dde1935a9.jpg	\N	{"fat": 38.29, "carbs": 4.6, "fiber": 0.15, "sugar": 3.54, "protein": 34.47, "calories": 500.9, "cholesterol": 543.72}	1121.760944166667	2022-08-30 20:01:04.349	\N
12	Mushroom Soup	\N	\N	1800	30 minutes	10	2 tbsp butter\n1/2 lb sliced mushrooms\n1/4 cup chopped onion\n3 tbsp all-purpose flour\nSalt, to taste\nBlack pepper, to taste\n1 cup vegetable broth\n1 carrot, sliced\n1 tbsp chopped parsley\n2 tbsp olive oil	10	2	\N	https://storage.googleapis.com/sg-uploads/7fed2adabd804354b1a10d52cbc68bfa.jpg	\N	{"fat": 25.81, "carbs": 22.62, "fiber": 3.94, "sugar": 6.82, "protein": 6.08, "calories": 347.11, "cholesterol": 30.5}	705.308685	2022-08-30 20:01:04.352	\N
13	3 C Bread	3 c bread	\N	3000	50 min	14	1/2 teaspoon salt\n1/2 cup milk\n1/2 cup candied cherries, quartered\n1/2 cup raisins\n2 cups shredded carrots\n1 teaspoon baking powder\n3 eggs\n1/2 cup chopped pecans\n1 teaspoon ground cinnamon\n1 cup sugar\n1 teaspoon baking soda\n1/2 cup vegetable oil\n2-1/2 cups all-purpose flour\n1-1/2 cups flaked coconut	14	20	\N	http://lh6.ggpht.com/OLIxvDuP2WMxiHKYXWkPFx-BepQWm-HiGXPqCVz_TUMx6AM7dNK9_SRiJE1DuUlIjZ7wc8z2zBWw1Tj3i94Ull4=s360	\N	{"fat": 10.35, "carbs": 27.77, "fiber": 1.57, "sugar": 17.34, "protein": 2.76, "calories": 215.26, "cholesterol": 30.5}	1334.433335177326	2022-08-30 20:01:04.359	\N
14	Spanish Omelette	spanish omelette	\N	2100	35 min	9	1 onion, chopped\n1/2 green bell pepper, chopped\n1 teaspoon dried parsley\n225 g cooked potatoes, cubed\n2 tablespoons vegetable oil\n100 g cheddar cheese, grated\n4 eggs, beaten\nSalt and pepper	8	2	\N	https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/34/11/25/picq5TvNj.jpg	\N	{"fat": 39.39, "carbs": 52.23, "fiber": 4.83, "sugar": 6.57, "protein": 18.52, "calories": 637.46, "cholesterol": 372}	774.0666666666666	2022-08-30 20:01:04.365	\N
15	Kimchi Fried Rice	\N	\N	2100	35 minutes	6	2 cups chopped kimchi\n1/3 cup kimchi juice, divided\n1 cup rice\n2 tbsp olive oil\n2 eggs\nSalt, to taste	6	2	\N	https://storage.googleapis.com/sg-uploads/560af61d669f43ee8bbe10df95176cec.jpg	\N	{"fat": 22.39, "carbs": 84.97, "fiber": 8.27, "sugar": 8.44, "protein": 16.55, "calories": 607.57, "cholesterol": 186}	774.6	2022-08-30 20:01:04.369	\N
17	Omelette With Cauliflower And Parsley	\N	\N	900	15 minutes	7	3 eggs\n3 tbsp milk\nSalt, to taste\nFreshly ground black pepper, to taste\n3 tbsp olive oil\n2 tbsp parsley\n1 cup sliced cauliflower	7	1	\N	https://storage.googleapis.com/sg-uploads/81d0077d1fc041b5ae318db0cfc09151.jpg	\N	{"fat": 56.69, "carbs": 10.55, "fiber": 2.97, "sugar": 4.99, "protein": 22.8, "calories": 643.56, "cholesterol": 562.58}	359.15	2022-08-30 20:01:04.375	\N
22	Rice With Zucchini And Rice	\N	\N	1800	30 minutes	7	1/2 onion, chopped\n1 clove garlic, minced\n1 zucchini, sliced\n5 oz mushrooms, sliced\nSalt, to taste\n2 tbsp olive oil\n1/2 cup rice	7	2	\N	https://storage.googleapis.com/sg-uploads/ce101f9fa3f14625b9024a51c6990841.jpg	\N	{"fat": 14.42, "carbs": 38.43, "fiber": 4.52, "sugar": 5.66, "protein": 9.37, "calories": 320.96, "cholesterol": 0}	461.347615625	2022-08-30 20:01:04.393	\N
29	Cilantro-Lemon Cauliflower Rice	\N	\N	1800	30 minutes	8	1 head cauliflower\n1 onion, diced\n1 garlic clove, minced\n2 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\n1 lemon, juiced\n½ cup cilantro, chopped	8	2	\N	https://storage.googleapis.com/sg-uploads/847893f042a1487694c70bd23a865242.jpg	\N	{"fat": 14.91, "carbs": 32.43, "fiber": 11.01, "sugar": 12.2, "protein": 9.56, "calories": 302.14, "cholesterol": 0}	1103.9	2022-08-30 20:01:04.416	\N
39	Japanese Curry And Rice	\N	\N	2700	45 minutes	8	4 tbsp butter\n3 tbsp curry\n2 lb chicken breasts, chopped\n2 tsp olive oil\n1 onion, chopped\n1 potato, cubed\n1 cup carrots, cut into chunks\n1/2 cup grated apple	8	3	\N	https://storage.googleapis.com/sg-uploads/0773cfb48d34491a92aab5bd0eb1eb63.jpg	\N	{"fat": 32.26, "carbs": 29.44, "fiber": 8.21, "sugar": 4.47, "protein": 62.62, "calories": 658.55, "cholesterol": 228.16}	1460.83474	2022-08-30 20:01:04.45	\N
44	Grilled Garlic Shrimp Skewers	\N	\N	1800	30 minutes	5	1 lb shrimp, peeled and deveined\n1 tbsp olive oil\n3 tbsp unsalted butter\n3 garlic cloves, minced\nSalt, to taste	5	2	\N	https://storage.googleapis.com/sg-uploads/0b5237b0f5954dac986e059735fa51b0.jpg	\N	{"fat": 27.25, "carbs": 3.5, "fiber": 0, "sugar": 0, "protein": 46.15, "calories": 443.85, "cholesterol": 385.13}	529.79237	2022-08-30 20:01:04.471	\N
46	Spanish Potato Omlete	\N	\N	2400	40 minutes	6	½ cup olive oil\n5 potatoes, diced into 1-inch pieces\n1 red onion, chopped\n8 eggs\nSalt, to taste\nBlack pepper, to taste	6	3	\N	https://storage.googleapis.com/sg-uploads/4993808a30e04ed8898977ae0ac01282.jpg	\N	{"fat": 48.77, "carbs": 12.66, "fiber": 2.47, "sugar": 2.17, "protein": 18.79, "calories": 564.73, "cholesterol": 496}	854.3	2022-08-30 20:01:04.474	\N
47	Crispy Skin Turmeric Salmon	\N	\N	1800	30 minutes	6	9 oz salmon\nSalt, to taste\n1 tsp ground turmeric\n1 tbsp olive oil\n1 lemon, sliced\n2 tbsp parsley	6	2	\N	https://storage.googleapis.com/sg-uploads/a5d9bfeae42b4171af621f83772c50e3.jpg	\N	{"fat": 24.04, "carbs": 4, "fiber": 1.29, "sugar": 0.81, "protein": 26.63, "calories": 338.86, "cholesterol": 70.17}	342.9790414583334	2022-08-30 20:01:04.476	\N
48	Herb Omelette With Spinach	\N	\N	600	10 minutes	7	2 tbsp olive oil\n4 eggs\n2 tbsp chopped parsley\n2 tbsp chopped basil\n2 cup chopped spinach\nSalt, to taste\nGround black pepper, to taste	7	1	\N	https://storage.googleapis.com/sg-uploads/0499e46f915548c8a6c61159c1e2632f.jpg	\N	{"fat": 46.39, "carbs": 5.57, "fiber": 2.15, "sugar": 1.07, "protein": 27.3, "calories": 548.98, "cholesterol": 744}	310.4	2022-08-30 20:01:04.492	\N
58	Summer Zucchini Garden Soup	\N	\N	1800	30 minutes	6	¼ cup olive oil\n¾ cup onion, chopped\nSalt, to taste\n2 garlic cloves, chopped\n2 lb zucchini, chopped\n1 cup basil, chopped	6	2	\N	https://storage.googleapis.com/sg-uploads/96c0a83445834fea845e8b65f2f5b14b.jpg	\N	{"fat": 28.87, "carbs": 20.71, "fiber": 6.01, "sugar": 2.54, "protein": 12.95, "calories": 394.52, "cholesterol": 0}	1156.78474	2022-08-30 20:01:04.516	\N
62	Roasted Tomato And Shrimp With Zoodles	\N	\N	1800	30 minutes	8	6 oz cherry tomatoes, sliced\n3 tbsp olive oil, divided\nSalt, to taste\nFreshly ground black pepper, to taste\n12 oz shrimp, peeled and deveined\n2 garlic cloves, minced\n2 tbsp lemon juice\n3 zucchinis, spiralized	8	2	\N	https://storage.googleapis.com/sg-uploads/e34cd837847945fbaa491af25d07689a.jpg	\N	{"fat": 24.09, "carbs": 14.08, "fiber": 3.68, "sugar": 3.18, "protein": 41.38, "calories": 438.67, "cholesterol": 243.24}	959.19141625	2022-08-30 20:01:04.534	\N
65	Oven-Baked Zucchini Chips	\N	\N	8100	135 minutes	4	1 large zucchini, sliced into rounds\n2 tbsp extra virgin olive oil\nSalt, to taste\nFreshly ground black pepper, to taste	4	2	\N	https://storage.googleapis.com/sg-uploads/3eb83136bc2849699865cd415a4bb18b.jpg	\N	{"fat": 27.47, "carbs": 5.33, "fiber": 1.82, "sugar": 3.11, "protein": 1.74, "calories": 275.51, "cholesterol": 0}	159.3	2022-08-30 20:01:04.543	\N
66	Tuna Rice Bowl	\N	\N	1500	25 minutes	7	1 cup long-grain rice\n8 oz canned tuna\n2 tbsp chopped parsley\n2 tbsp lemon juice\nSalt, to taste\nGround black pepper, to taste\n2 tbsp olive oil	7	2	\N	https://storage.googleapis.com/sg-uploads/44e22aeaa67c43a9a8e29df3ae1edcc7.jpg	\N	{"fat": 17.75, "carbs": 72.03, "fiber": 4.42, "sugar": 0.42, "protein": 33.23, "calories": 580.78, "cholesterol": 53.3}	480.1961850000001	2022-08-30 20:01:04.553	\N
69	Avocado And Tuna Salad	avocado and tuna salad	\N	1800	15 minutes	7	2 tablespoons olive oil\n1/2 cup cucumbers\n1/2 cup celery\n1 cup tuna\n2 tablespoons lemon juice\n1 avocado\nPinch of sea salt to taste	7	1	\N	https://sg-data.storage.googleapis.com/images_bucket/a67358183da39f4a0d2d353bf97727fe.png	\N	{"fat": 51.5, "carbs": 18.29, "fiber": 4.51, "sugar": 3.3, "protein": 53.66, "calories": 751.25, "cholesterol": 106.53}	536.8916664721831	2022-08-30 20:01:04.559	\N
70	Sauteed Mushrooms In Soy Sauce Glaze	\N	\N	900	15 minutes	5	2 tbsp olive oil\n12 oz mushrooms, sliced\n2 garlic cloves, chopped\n2 tbsp soy sauce\n1 tbsp parsley, chopped	5	1	\N	https://storage.googleapis.com/sg-uploads/a9cb3df77a9a479ba9037f4adf464450.jpg	\N	{"fat": 28.22, "carbs": 15.34, "fiber": 3.82, "sugar": 7.38, "protein": 14.41, "calories": 372.98, "cholesterol": 0}	416.9942775	2022-08-30 20:01:04.564	\N
16	Soy Garlic Pork Chops	\N	\N	1500	25 minutes	10	1/3 cup tomato sauce\n2 tbsp soy sauce\n1 tbsp honey\n2 garlic cloves, crushed\n12 oz pork chops\n4 potatoes, peeled and diced\n4 cups broccoli florets\n5 tbsp olive oil\nSalt, to taste\nGround black pepper, to taste	10	3	\N	https://storage.googleapis.com/sg-uploads/90d2ec2c260546dd81bb1e9643dfb07b.jpg	\N	{"fat": 33.38, "carbs": 23.87, "fiber": 5.1, "sugar": 8.02, "protein": 29.93, "calories": 515.65, "cholesterol": 78.24}	1080.327610833333	2022-08-30 20:01:04.372	\N
18	Kimchi Soup	\N	\N	2400	placeholder	7	5 cups water\n2 cups kimchi, cut into bite-size pieces\n1/2 pound boneless pork shoulder, cut into bite-size pieces\n1 tablespoon hot pepper paste\n1 teaspoon white sugar\n1/2 teaspoon salt\n3 green onions, chopped	7	4	\N	https://storage.googleapis.com/sg-uploads/recipes/24135bde-8885-4641-963d-ae5cb22ef384.jpg	\N	{"fat": 10.31, "carbs": 6.33, "fiber": 2.65, "sugar": 2.41, "protein": 11.19, "calories": 164.91, "cholesterol": 40.26}	1773.371184999841	2022-08-30 20:01:04.376	\N
21	Spanish-Style Tortilla With Potato And Spinach	\N	\N	3600	60 minutes	7	¼ cup olive oil\n1 lb large potatoes, peeled and cut into rounds\n3 onions, chopped\nSalt, to taste\n6 oz spinach\n5 large eggs\nFreshly ground black pepper, to taste	7	2	\N	https://storage.googleapis.com/sg-uploads/db5268f87ff941a48eb18f90d140f2fc.jpg	\N	{"fat": 39.72, "carbs": 55.35, "fiber": 11.91, "sugar": 11, "protein": 26.72, "calories": 685.8, "cholesterol": 465}	1415.58950875	2022-08-30 20:01:04.393	\N
45	Classic Organic Bacon And Eggs	classic organic bacon and eggs	\N	1800	15 minutes	5	2 eggs\n1/4 cup fresh parsley\n2 ounces organic bacon\n3 tablespoons olive oil\n1 cup cherry tomatoes	5	1	\N	https://sg-data.storage.googleapis.com/images_bucket/5719bd99462b406f4a42d60013bf1753.png	\N	{"fat": 51.61, "carbs": 14.43, "fiber": 4.4, "sugar": 9.01, "protein": 28.52, "calories": 636.35, "cholesterol": 399.22}	456.19904625	2022-08-30 20:01:04.472	\N
49	Smoked Salmon Scramble	\N	\N	600	10 minutes	5	6 large eggs\nSalt, to taste\n1 tbsp butter\n4 oz salmon, chopped\nFreshly ground black pepper, to taste	5	2	\N	https://storage.googleapis.com/sg-uploads/2090db4a1e134bda9d0c7546f8253240.jpg	\N	{"fat": 27.67, "carbs": 1.82, "fiber": 0.29, "sugar": 0.57, "protein": 30.6, "calories": 378.66, "cholesterol": 604.44}	435.4855925000001	2022-08-30 20:01:04.492	\N
57	Salmon With Mashed Sweet Potato	\N	\N	1800	30 minutes	6	2 sweet potatoes, peeled and cut into 1-inch cubes\n2 tbsp olive oil\n8 oz salmon fillet\n2 cloves garlic, minced\nBlack pepper, to taste\nSalt, to taste	6	2	\N	https://storage.googleapis.com/sg-uploads/0002315d65ba4758a49fb07d0edb5499.jpg	\N	{"fat": 18.32, "carbs": 32.03, "fiber": 1.87, "sugar": 6.1, "protein": 24.41, "calories": 390.68, "cholesterol": 74.84}	350.9143668181818	2022-08-30 20:01:04.515	\N
61	Non-Dairy Creamy Zucchini Soup	non dairy creamy zucchini soup	\N	1800	30 minutes	6	2 teaspoons olive oil\n1 cup coconut milk\n2 cups chicken broth\n2 zucchini\n2 carrots\n2 tomato	6	1	\N	https://sg-data.storage.googleapis.com/images_bucket/8e1e22e386f8a3349465c287a12b0295.png	\N	{"fat": 72.82, "carbs": 56.09, "fiber": 9.86, "sugar": 26.35, "protein": 28.89, "calories": 995.28, "cholesterol": 28.35}	1125.69904625	2022-08-30 20:01:04.531	\N
63	Cherry Tomato And Herb Omelette	\N	\N	600	10 minutes	6	6 cherry tomatoes, halved\n2 large eggs\n1 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\nParsley, to taste	6	1	\N	https://storage.googleapis.com/sg-uploads/13b3540d31434137a24c25a8496930ce.jpg	\N	{"fat": 23.56, "carbs": 78.02, "fiber": 25.99, "sugar": 48.91, "protein": 38.59, "calories": 678.46, "cholesterol": 372}	1645.8	2022-08-30 20:01:04.536	\N
64	Hard Boiled Eggs	hard boiled egg	\N	600	10.0 min	1	2 eggs	1	1	\N	https://images.unsplash.com/photo-1529570634977-ec042420117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80	\N	{"fat": 9.51, "carbs": 0.72, "fiber": null, "sugar": 0.37, "protein": 12.56, "calories": 138.71, "cholesterol": 372}	100	2022-08-30 20:01:04.542	\N
67	One-Pan Chicken, Broccoli, And Rice	\N	\N	1500	25 minutes	9	3 tbsp extra virgin olive oil\n½ medium yellow onion, diced finely\n1 lb boneless, skinless chicken breasts, cut into bite sized pieces\n2 cloves of garlic, minced\n1 tsp salt\n1 tsp ground black pepper\n1 cup white rice\n2½ cups broccoli florets, cut into bite sized pieces\n2½ cups of chicken broth	9	4	\N	https://storage.googleapis.com/sg-uploads/96f0c61cbeea46df888d38aee43e3e04.jpg	\N	{"fat": 31.7, "carbs": 47.53, "fiber": 1.76, "sugar": 1.98, "protein": 58.07, "calories": 707.71, "cholesterol": 119.63}	1490.659037588663	2022-08-30 20:01:04.554	\N
74	Scampi With Butter And Lemon	\N	\N	900	15 minutes	7	2 cloves garlic, minced\n2 tbsp butter\n1 tbsp olive oil\n10 oz shrimp, peeled and deveined\n1/4 cup lemon juice\nBlack pepper, to taste\n2 tbsp chopped parsley	7	3	\N	https://storage.googleapis.com/sg-uploads/d4f74d84a6fe416ebf3c3a0d5e926aa2.jpg	\N	{"fat": 13.95, "carbs": 3.8, "fiber": 0.81, "sugar": 0.49, "protein": 19.79, "calories": 219.9, "cholesterol": 162.08}	394.2702312500001	2022-08-30 20:01:04.581	\N
80	Fresh Pineapple Chunks	pineapple chunks	\N	300	5.0 min	1	1/4 pineapple	1	1	\N	https://images.unsplash.com/photo-1469715670736-059afa7dee7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	{"fat": 0.05, "carbs": 4.88, "fiber": 0, "sugar": 3.42, "protein": 0.23, "calories": 20.89, "cholesterol": 0}	41.25	2022-08-30 20:01:04.6	\N
82	Baked Chicken, Potato And Carrots	\N	\N	2700	45 minutes	9	1 lb potatoes, peeled and cut into quarters\n1 lb carrots, peeled and cut into chunks\n1 yellow onion, peeled and cut into large chunks\n1 lb boneless, skinless chicken breasts\n3 tbsp olive oil, divided\n2 tbsp chopped fresh parsley\nSalt, to taste\n3 cloves garlic\nFresh cracked black pepper, to taste	9	3	\N	https://storage.googleapis.com/sg-uploads/652e5b67468343479d1744d3e1063378.jpg	\N	{"fat": 29.56, "carbs": 38.97, "fiber": 8.24, "sugar": 10.28, "protein": 33.72, "calories": 556.78, "cholesterol": 74.09}	1513.17711	2022-08-30 20:01:04.604	\N
85	Keto Garlic-Shrimp Zoodles	\N	\N	900	15 minutes	8	2 zucchini\n10 oz peeled and deveined shrimp\n2 tbsp olive oil\n2 tbsp lemon juice\n3 garlic cloves, minced\nSalt, to taste\nFreshly ground black pepper, to taste\n2 tbsp chopped parsley	8	2	\N	https://storage.googleapis.com/sg-uploads/323fce49d766429290c08c808245c13b.jpg	\N	{"fat": 16.62, "carbs": 8.52, "fiber": 1.78, "sugar": 0.42, "protein": 32.65, "calories": 314.29, "cholesterol": 202.7}	611.49523125	2022-08-30 20:01:04.616	\N
19	Stewed Cabbage With Meatballs	\N	\N	3600	60 minutes	12	10 oz ground beef\n1/3 cup brown rice\n1/2 onion, sliced\n1 garlic clove, minced\n6 oz canned diced tomatoes\n10 oz cabbage, chopped\n1 cup tomato sauce\n1/2 red bell pepper, chopped\n1 carrot, sliced\nBlack pepper, to taste\nSalt, to taste\n1 egg	12	3	\N	https://storage.googleapis.com/sg-uploads/d671966b92194d0fa6d92023ec0b79f1.jpg	\N	{"fat": 14.92, "carbs": 37.01, "fiber": 6.31, "sugar": 7.72, "protein": 25.63, "calories": 384.81, "cholesterol": 120.59}	1328.320934583333	2022-08-30 20:01:04.379	\N
20	Vegetable Stir Fry	\N	\N	1200	20 minutes	9	1 large carrots, sliced\n1 cups broccoli florets\n4 oz mushrooms, sliced\n3 tbsp olive oil\n2 garlic cloves, peeled and minced\n1 tsp ginger, minced\n¼ cup chicken broth\n2 tbsp soy sauce\n6 oz canned corn, drained	9	1	\N	https://storage.googleapis.com/sg-uploads/abc064f5916b490c9e8394ce6def6cb2.jpg	\N	{"fat": 48.01, "carbs": 58.28, "fiber": 10.77, "sugar": 21.12, "protein": 29.57, "calories": 783.51, "cholesterol": 25.62}	644.74523125	2022-08-30 20:01:04.392	\N
24	Salmon And Potato Salad	\N	\N	2400	40 minutes	7	2 eggs\n1/2 lb potatoes\n3 tbsp olive oil\n1 onion, chopped\n10 oz salmon in oil, drained\n1/2 cup mayonnaise\n1/2 tbsp parsley	7	4	\N	https://storage.googleapis.com/sg-uploads/15c931f36b474124925c11201167e389.jpg	\N	{"fat": 42.7, "carbs": 11.16, "fiber": 2.11, "sugar": 1.95, "protein": 19.79, "calories": 508.06, "cholesterol": 143.53}	922.6914162500001	2022-08-30 20:01:04.397	\N
28	Paleo Scrambled Eggs	\N	\N	600	10 minutes	5	5 eggs\n1/2 cup coconut milk\n1 tbsp olive oil\nSalt, to taste\nGroudn black pepper, to taste	5	2	\N	https://storage.googleapis.com/sg-uploads/d3a796c288e84304a9332f16b5e49547.jpg	\N	{"fat": 20.66, "carbs": 4.56, "fiber": 0.29, "sugar": 3.55, "protein": 17.74, "calories": 275.14, "cholesterol": 471.1}	393.4	2022-08-30 20:01:04.414	\N
34	Creamy Mushroom Soup	\N	\N	1500	25 minutes	8	¼ cup butter\n1 cup chopped mushrooms\n2 shallots, chopped\n2 tbsp all-purpose flour\n14 oz canned chicken broth\nSalt, to taste\nBlack pepper, to taste\n1 tbsp olive oil	8	2	\N	https://storage.googleapis.com/sg-uploads/39a661c4d9eb4985bbd06033b580f4d6.jpg	\N	{"fat": 46.08, "carbs": 11.32, "fiber": 1.17, "sugar": 1.53, "protein": 52.71, "calories": 670.85, "cholesterol": 160.23}	581.06832375	2022-08-30 20:01:04.433	\N
37	Mushroom Omelette With Avocado	mushroom omelette	\N	1800	20 minutes	6	1/2 cup mushrooms\n3 eggs\n2 tablespoons olive oil\n1/2 cup cherry tomatoes\n1/4 yellow onion\n1/2 avocado	6	1	\N	https://sg-data.storage.googleapis.com/images_bucket/bb6f5fcb75768403317ea97a31abb870.png	\N	{"fat": 54.88, "carbs": 13.23, "fiber": 6.64, "sugar": 3.7, "protein": 22.28, "calories": 635.93, "cholesterol": 558}	383.25	2022-08-30 20:01:04.445	\N
43	Omelette With Tofu And Parsley	\N	\N	600	10 minutes	6	3 eggs\n4¾ tbsp milk\nSalt, to taste\nFreshly ground black pepper, to taste\n1 cup cubed tofu\n1¾ cup parsley	6	1	\N	https://storage.googleapis.com/sg-uploads/7c3729095b9d479488132b11bd8c7cbb.jpg	\N	{"fat": 29.38, "carbs": 17.31, "fiber": 4.79, "sugar": 6.66, "protein": 44.52, "calories": 511.72, "cholesterol": 565.24}	583.7375	2022-08-30 20:01:04.471	\N
50	Steamed Salmon With Vegetables	\N	\N	1800	30 minutes	9	2 carrots, peeled and thinly sliced\n4 oz broccoli, cut into florets\n4 oz cauliflower, cut into florets\n2 tbsp lemon juice\nSalt, to taste\nBlack pepper, to taste\n6 oz salmon, skinless\n1 cup vegetable broth\n4 sprigs parsley	9	1	\N	https://storage.googleapis.com/sg-uploads/328db0f07d6844cda6735967c3fea6eb.jpg	\N	{"fat": 16.62, "carbs": 84.93, "fiber": 22.23, "sugar": 26.85, "protein": 39.61, "calories": 647.77, "cholesterol": 52.73}	1151.69332375	2022-08-30 20:01:04.493	\N
56	Lemon Scrambled Eggs	\N	\N	300	5 minutes	6	3 tbsp butter\n4 large eggs\n2 tbsp lemon juice\n2 tbsp chopped parsley, to garnish\nSalt, to taste\nBlack pepper, to taste	6	1	\N	https://storage.googleapis.com/sg-uploads/1c514f504e954617b08f3cad88fdbef8.jpg	\N	{"fat": 53.75, "carbs": 5.52, "fiber": 0.92, "sugar": 1.61, "protein": 26.05, "calories": 610.06, "cholesterol": 835.51}	288.5625000000001	2022-08-30 20:01:04.513	\N
98	Soy-Lime Roasted Tofu	\N	\N	2700	45 minutes	4	12 oz tofu, cubed\n⅔ cup reduced-sodium soy sauce\n⅔ cup lime juice\n3 tbsp toasted sesame oil	4	2	\N	https://storage.googleapis.com/sg-uploads/1eb258f9c81c42f880f59586b4d5ef20.jpg	\N	{"fat": 28.59, "carbs": 20.64, "fiber": 0.83, "sugar": 13.08, "protein": 14.08, "calories": 396.16, "cholesterol": 0}	702.3276108333332	2022-08-30 20:01:04.662	\N
103	Arroz Rojo	\N	\N	2400	40 minutes	7	1 tomato, cored\n1 tbsp olive oil\n1/2 cup minced onion\n1 clove garlic, minced\n3/4 cup white rice\n1 cup vegetable broth\n2 tbsp tomato sauce	7	3	\N	https://storage.googleapis.com/sg-uploads/dba2ce46eaa74e368e84f89f3605dc36.jpg	\N	{"fat": 4.99, "carbs": 45.54, "fiber": 1.09, "sugar": 1.58, "protein": 4.54, "calories": 245.21, "cholesterol": 0}	675	2022-08-30 20:01:04.683	\N
112	Dried Mango Slices	dried mango slices	\N	300	5.0 min	1	1 medium mango	1	1	\N	https://images.unsplash.com/photo-1550825570-8ae96cf12d87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	{"fat": 0.63, "carbs": 24.72, "fiber": 5.38, "sugar": 22.54, "protein": 1.35, "calories": 109.92, "cholesterol": 0}	165	2022-08-30 20:01:04.709	\N
23	Summer Vegetable Rice	\N	\N	1500	25 minutes	8	1 cup uncooked white rice\n1 tbsp olive oil\n1 zucchini, slived and cut into triangles\n1 cup canned corn, drained\n14 oz canned tomatoes, diced\n1 medium yellow onion, chopped\nSalt, to taste\nFresh cracked black pepper, to taste	8	2	\N	https://storage.googleapis.com/sg-uploads/9e1ab4fa8a684c30b6d7c2667e4f9b30.jpg	\N	{"fat": 13.75, "carbs": 102.2, "fiber": 6.48, "sugar": 11.22, "protein": 11.64, "calories": 579.08, "cholesterol": 0}	959.69332375	2022-08-30 20:01:04.395	\N
25	Chicken And Mushrooms	\N	\N	2400	40 minutes	7	8 oz chicken breasts, boneless\n2 tbsp olive oil\n8 oz fresh mushrooms, sliced\n1/2 cup water\n2 tbsp ghee\nSalt, to taste\nGround black pepper, to taste	7	2	\N	https://storage.googleapis.com/sg-uploads/ab1a0c56e0194ac59a0ab54a3b7c6ff8.jpg	\N	{"fat": 37.04, "carbs": 12.04, "fiber": 2.67, "sugar": 4.26, "protein": 20.05, "calories": 461.71, "cholesterol": 69.22}	641.89237	2022-08-30 20:01:04.4	\N
26	Zucchini And Mushroom Risotto With Garlic	\N	\N	1800	30 minutes	9	1½ cup rice\n3 cups water\n2 tbsp olive oil\n4 garlic cloves, minced\n1 zucchini, chopped\n1 cup sliced mushrooms\nSalt, to taste\nFreshly ground black pepper, to taste\nBasil, to taste	9	2	\N	https://storage.googleapis.com/sg-uploads/4242eb2669dd440e8bd1050a57ab235c.jpg	\N	{"fat": 15.15, "carbs": 95.69, "fiber": 8.7, "sugar": 5.25, "protein": 19.64, "calories": 597.68, "cholesterol": 0}	1197.8	2022-08-30 20:01:04.405	\N
27	Beef Soup (Kharcho)	beef soup kharcho	\N	9900	2 hr 45 min	15	3 tsp salt\n4 cups beef broth + 4 cup filtered water\n¼ cup fresh dill, chopped, plus more to serve\n2 dry bay leaves\n1 tsp smoked paprika\n3 lb beef stew meat\n¼ cup fresh parsley, chopped, plus more to serve\n4 Tbsp light olive oil (or any cooking oil), divided\n½ cup uncooked white rice (I used Jasmine)\n28 oz can diced tomatoes\n1 tsp ground coriander seeds\n2 Tbsp fresh lemon juice (from 1 medium lemon)\n2 celery ribs, finely chopped\n2 garlic cloves, pressed\n1 medium onion, chopped	15	6	\N	https://lh3.googleusercontent.com/Jqmz8YswocQMWVHZzw_JFAubr2oPveiUP52huplw6qcQCPI5gWrtT-KpiYvl25QPmY-crYjsnGBP6cM051xeig=s360	\N	{"fat": 29.76, "carbs": 21.31, "fiber": 2.09, "sugar": 1.73, "protein": 53.18, "calories": 565.79, "cholesterol": 161.03}	3701.655435230624	2022-08-30 20:01:04.413	\N
30	Easy Canned Tuna Pasta	\N	\N	900	15 minutes	7	4 tablespoon olive oil\n2 large cloves garlic, minced\n5 oz tuna, canned\n1 teaspoon lemon juice\nSalt\nBlack pepper, to taste\n3 oz pasta	7	1	\N	https://storage.googleapis.com/sg-uploads/63def98581c14d4e85c8508aa878b3db.jpg	\N	{"fat": 56.55, "carbs": 11.37, "fiber": 1.96, "sugar": 4.26, "protein": 33.5, "calories": 688.39, "cholesterol": 66.62}	304.1795183333334	2022-08-30 20:01:04.418	\N
31	Grilled Salmon With Mashed Potato And Spinach	\N	\N	1800	30 minutes	8	1½ lb potatoes, peeled and diced\n¼ cup milk\nSalt, to taste\n½ cup sour cream\n3 tbsp olive oil\n6 oz spinach, chopped\n15 oz salmon, sliced\nRed pepper, to taste	8	3	\N	https://storage.googleapis.com/sg-uploads/0a499be506844164afa0893f33f5c6de.jpg	\N	{"fat": 47.11, "carbs": 36.91, "fiber": 7.96, "sugar": 6.02, "protein": 37.53, "calories": 721.76, "cholesterol": 133.19}	1651.828540625	2022-08-30 20:01:04.425	\N
32	Zucchini-Onion Scrambled Eggs	\N	\N	1200	20 minutes	6	5 eggs\nSalt, to taste\nFreshly ground black pepper, to taste\n2 zucchini, diced\n½ onion, chopped\n3 tbsp olive oil	6	2	\N	https://storage.googleapis.com/sg-uploads/b6c2ba7726074c1992725c1a01bdbc74.jpg	\N	{"fat": 32.61, "carbs": 9.23, "fiber": 2.21, "sugar": 5.27, "protein": 17.76, "calories": 401.46, "cholesterol": 465}	626.4	2022-08-30 20:01:04.429	\N
33	Spinach-Garlic Scramble	\N	\N	600	10 minutes	7	2 tsp butter\n1 shallot, minced\n2 garlic cloves, minced\n3 cups spinach, chopped\n4 eggs, beaten\nSalt, to taste\nFreshly ground black pepper, to taste	7	1	\N	https://storage.googleapis.com/sg-uploads/e59f6aeaf64146f8848cdadad34585ba.jpg	\N	{"fat": 27.13, "carbs": 9.86, "fiber": 2.88, "sugar": 1.93, "protein": 28.26, "calories": 396.66, "cholesterol": 764.34}	327.3583333333333	2022-08-30 20:01:04.432	\N
35	Carrot Pancake	\N	\N	1800	30 minutes	5	2 cups shredded carrots\n2 eggs\n½ cup flour\n1 tsp salt\n2 tbsp olive oil	5	4	\N	https://storage.googleapis.com/sg-uploads/bdf4fa8814d740fa985a18b023bb1a4d.jpg	\N	{"fat": 9.43, "carbs": 18.23, "fiber": 2.21, "sugar": 3.17, "protein": 5.35, "calories": 179.24, "cholesterol": 93}	451.5	2022-08-30 20:01:04.435	\N
36	Greek Tomato Rice	\N	\N	1800	30 minutes	7	½ tbsp olive oil\n1 small onion, diced\n1 garlic clove\n½ cup long grain rice\n1 cup vegetable broth\n1 cup tomato sauce\n¼ tsp salt	7	2	\N	https://storage.googleapis.com/sg-uploads/26c512b022634da6870c498c62713b71.jpg	\N	{"fat": 4.33, "carbs": 54.71, "fiber": 3.7, "sugar": 4.12, "protein": 6.17, "calories": 282.48, "cholesterol": 0}	747.65	2022-08-30 20:01:04.441	\N
38	Haluski	\N	\N	2700	45 minutes	6	3 oz medium-wide egg noodles\n2 tbsp butter, divided\n2 onions, chopped\n⅔ cabbage head, cored and chopped\nSalt, to taste\nFreshly ground black pepper, to taste	6	2	\N	https://storage.googleapis.com/sg-uploads/0165d8f409094608b215e71b81d08623.jpg	\N	{"fat": 13.12, "carbs": 47.02, "fiber": 5, "sugar": 8.24, "protein": 8.57, "calories": 340.46, "cholesterol": 72.18}	487.9902360416667	2022-08-30 20:01:04.448	\N
40	Chinese Style Meatballs	\N	\N	6600	110 minutes	6	1 lb ground pork\n4 eggs\n1/3 cup soy sauce\n1/4 cup sliced green onions\n2 cloves garlic, minced\n1/2 tsp ground ginger	6	3	\N	https://storage.googleapis.com/sg-uploads/f13a8714def44a659057f988c8361602.jpg	\N	{"fat": 38.43, "carbs": 3.8, "fiber": 0.67, "sugar": 1.15, "protein": 37.74, "calories": 512.07, "cholesterol": 356.86}	786.4590366666667	2022-08-30 20:01:04.458	\N
41	Penne With Zucchini And Tomato	\N	\N	1800	30 minutes	9	6 oz penne\n2 tbsp olive oil\n1 clove garlic, chopped\n1 zucchini, sliced\n2 tbsp dried tomatoes\n8 oz tomato sauce\nSalt, to taste\nBlack pepper, to taste\n1 tbsp chopped parsley	9	2	\N	https://storage.googleapis.com/sg-uploads/8365096e48184d57a18aa9f5cdc6f2cb.jpg	\N	{"fat": 15.8, "carbs": 38.72, "fiber": 4.79, "sugar": 3.46, "protein": 7.25, "calories": 326.01, "cholesterol": 0}	569.5433237499999	2022-08-30 20:01:04.464	\N
42	Spinach With Eggs	\N	\N	1800	30 minutes	6	2 tbsp olive oil\n1 onion, diced\n12 oz spinach\nSalt, to taste\nBlack pepper, to taste\n4 eggs	6	2	\N	https://storage.googleapis.com/sg-uploads/8160197654844951a21fceaa237d6f5a.jpg	\N	{"fat": 23.79, "carbs": 15.1, "fiber": 5.39, "sugar": 4.48, "protein": 18.42, "calories": 348.22, "cholesterol": 372}	735.0942775	2022-08-30 20:01:04.47	\N
51	Potato And Broccoli Frittata	potato and broccoli frittata	\N	1800	20 minutes	5	2 tablespoons olive oil\n1/2  broccoli\n1/4 cup vegetable broth\n1 potato\n2 eggs	5	1	\N	https://sg-data.storage.googleapis.com/images_bucket/0e22490be946d42a90012f7aad9f220a.png	\N	{"fat": 36.75, "carbs": 9.03, "fiber": 2.87, "sugar": 1.46, "protein": 14.95, "calories": 426.7, "cholesterol": 372}	265.5	2022-08-30 20:01:04.493	\N
52	Roasted Garlic Lemon Broccoli	\N	\N	1500	placeholder	6	2 heads broccoli, separated into florets\n2 teaspoons extra-virgin olive oil\n1 teaspoon sea salt\n1/2 teaspoon ground black pepper\n1 clove garlic, minced\n1/2 teaspoon lemon juice	6	6	\N	https://storage.googleapis.com/sg-uploads/recipes/0444d8db-e24e-49be-9fd7-6d22d80b07ae.jpg	\N	{"fat": 2.26, "carbs": 13.77, "fiber": 5.33, "sugar": 3.46, "protein": 5.77, "calories": 83.49, "cholesterol": 0}	1236.545833333709	2022-08-30 20:01:04.494	\N
53	Pasta Al' Tonno	\N	\N	1500	25 minutes	7	12 oz spaghetti\n4 tbsp olive oil, divided\n2 cloves garlic, minced\n1/2 onion, chopped\n10 oz tuna in oil, drained\nSalt, to taste\nGround black pepper, to taste	7	4	\N	https://storage.googleapis.com/sg-uploads/eb931e66d22a4327b973781cc2b0f508.jpg	\N	{"fat": 15.78, "carbs": 69.55, "fiber": 2.05, "sugar": 0.87, "protein": 22.04, "calories": 508.44, "cholesterol": 33.31}	771.5895087499999	2022-08-30 20:01:04.496	\N
54	Red Pepper Pasta	\N	\N	1200	20 minutes	7	1 red pepper, thinly sliced\n2 tbsp olive oil\n1 garlic clove\n3 oz spaghetti\n1 tbsp chopped parsley\nSalt, to taste\nGround black pepper, to taste	7	1	\N	https://storage.googleapis.com/sg-uploads/ad1d44066cc447649167769eeb8f14ab.jpg	\N	{"fat": 29.09, "carbs": 78.51, "fiber": 5.43, "sugar": 6.34, "protein": 8.09, "calories": 608.21, "cholesterol": 0}	275.748569375	2022-08-30 20:01:04.511	\N
55	Soy-Lime Roasted Tofu	\N	\N	2700	45 minutes	4	12 oz tofu, cubed\n⅔ cup reduced-sodium soy sauce\n⅔ cup lime juice\n3 tbsp toasted sesame oil	4	2	\N	https://storage.googleapis.com/sg-uploads/1eb258f9c81c42f880f59586b4d5ef20.jpg	\N	{"fat": 28.59, "carbs": 20.64, "fiber": 0.83, "sugar": 13.08, "protein": 14.08, "calories": 396.16, "cholesterol": 0}	702.3276108333332	2022-08-30 20:01:04.512	\N
59	Baked Avocado Eggs With Bacon	\N	\N	1500	25 minutes	5	2 large avocados\n4 eggs\nSalt, to taste\nBlack pepper, to taste\n4 oz bacon, crumbled	5	2	\N	https://storage.googleapis.com/sg-uploads/db0a1409c9304416a33b54538fd50a7f.jpg	\N	{"fat": 47.74, "carbs": 14.25, "fiber": 10.34, "sugar": 1.37, "protein": 39.98, "calories": 646.55, "cholesterol": 412.26}	621.6980925	2022-08-30 20:01:04.517	\N
60	Cilantro And Parsley Shrimp	\N	\N	1500	25 minutes	8	2 tbsp olive oil\n1 lb shrimp, peeled and deveined\n1 onion, chopped\n4 cloves garlic, minced\n1/2 cup chopped parsley\n1/2 cup chopped cilantro\n1 avocado, sliced\n2 cups sliced tomatoes	8	4	\N	https://storage.googleapis.com/sg-uploads/b2bec3c5ab8a4913b193f931a09330ef.jpg	\N	{"fat": 14.55, "carbs": 12, "fiber": 4.27, "sugar": 2.05, "protein": 25.85, "calories": 282.37, "cholesterol": 162.16}	1156.59237	2022-08-30 20:01:04.53	\N
68	Classic Organic Bacon And Eggs	classic organic bacon and eggs	\N	1800	15 minutes	5	2 eggs\n1/4 cup fresh parsley\n2 ounces organic bacon\n3 tablespoons olive oil\n1 cup cherry tomatoes	5	1	\N	https://sg-data.storage.googleapis.com/images_bucket/5719bd99462b406f4a42d60013bf1753.png	\N	{"fat": 51.61, "carbs": 14.43, "fiber": 4.4, "sugar": 9.01, "protein": 28.52, "calories": 636.35, "cholesterol": 399.22}	456.19904625	2022-08-30 20:01:04.556	\N
71	Mushroom Omelette	mushroom omelette	\N	1500	25 min	8	1 egg\n1 egg white\n2 tsp chopped chives\n4 cup mushrooms, sliced\n2 tbsp low fat milk\n1/4 onion, diced\n1 Handful of baby spinach\n1 Splash Worcestershire Sauce	8	1	\N	http://lh3.googleusercontent.com/DOJBjWbeCjEgKA7kPK0oXsSJzpIaN_ekPy_geSrE9G1-RrJM14djtbsk66f-vSgPaRduQLzinfn-ArcGBYKJXFQ=s360	\N	{"fat": 6.12, "carbs": 16.76, "fiber": 4.16, "sugar": 9.51, "protein": 20.63, "calories": 204.62, "cholesterol": 187.2}	466.398553440588	2022-08-30 20:01:04.567	\N
72	Chicken Tinola	\N	\N	1200	placeholder	9	* 2 tablespoon cooking oil\n* 2 big clove garlic, minced\n* 1 medium onion, coarsely chopped\n* 1 thumb ginger root,\n* 500 gram chicken,\n* 2-3 tablespoon fish sauce\n<http://www amazon com gp product b006ya50dw ref=as_li_tl?ie=utf8 and camp=1789 and creative=9325 and creativeasin=b006ya50dw and linkcode=as2 and tag=foxfol09-20 and linkid=doqnmn3oyst2jn4i>\n* 3 cup water\n* 1 chayote,\n* 1 cup chili pepper leaf	10	8	\N	https://storage.googleapis.com/sg-uploads/recipes/8b53d42f-691f-4965-88b6-6358c6ad5e3c.jpg	\N	{"fat": 13.1, "carbs": 5.87, "fiber": 1.11, "sugar": 2.34, "protein": 12.8, "calories": 192.22, "cholesterol": 46.88}	1813	2022-08-30 20:01:04.576	\N
76	Sweet And Spicy Apple Coleslaw	\N	\N	600	10 minutes	8	6 cups thinly sliced green cabbage\n1 apple, grated\n⅓ cup mayonnaise\n¼ cup lemon juice\n⅓ tsp raw honey\n¼ tsp salt\nFreshly ground black pepper, to taste\n2 tbsp flat leaf parsley, roughly chopped	8	4	\N	https://storage.googleapis.com/sg-uploads/57517b2e2eb2474d859021d4a1d10e79.jpg	\N	{"fat": 14.09, "carbs": 24.52, "fiber": 6.28, "sugar": 5.24, "protein": 3.29, "calories": 238.07, "cholesterol": 7.7}	931.9666666666667	2022-08-30 20:01:04.586	\N
79	Bacon-Wrapped Avocado Wedges	\N	\N	900	15 minutes	4	1 avocado\n8 oz bacon, sliced\nSalt, to taste\nFreshly ground black pepper, to taste	4	1	\N	https://storage.googleapis.com/sg-uploads/e97ddf22a99c4b46975d99292cde45a4.jpg	\N	{"fat": 28.01, "carbs": 17.3, "fiber": 10.63, "sugar": 3.05, "protein": 49.3, "calories": 518.49, "cholesterol": 108.86}	384.6961850000001	2022-08-30 20:01:04.598	\N
81	Apple With Almond Butter	apple with almond butter	\N	300	5.0 min	2	1 green apple\n2 tablespoons almond butter	2	1	\N	https://storage.googleapis.com/sg-uploads/7480444c147e404e8dd259e560db764d.jpeg	\N	{"fat": 18.73, "carbs": 65.1, "fiber": 15, "sugar": 1, "protein": 12.15, "calories": 477.54, "cholesterol": 0}	278	2022-08-30 20:01:04.601	\N
97	Easy Keto Barbecue Chicken Thighs	\N	\N	1500	25 minutes	5	2 lb boneless, skinless chicken thighs\n1 cup teriyaki sauce, divided\nSalt, to taste\nGround black pepper, to taste\n2 tbsp olive oil	5	4	\N	https://storage.googleapis.com/sg-uploads/31df15cb917141399f01606550c22676.jpg	\N	{"fat": 14.27, "carbs": 16.56, "fiber": 0.22, "sugar": 12.65, "protein": 44.2, "calories": 371.45, "cholesterol": 161.03}	1230.08474	2022-08-30 20:01:04.66	\N
99	Avocado With Lemon Juice	avocado with lemon juice	\N	1800	5 minutes	3	1/2 teaspoon black pepper\n1 avocado\n2 tablespoons lemon juice	3	1	\N	https://sg-data.storage.googleapis.com/images_bucket/ce7411d3056c1e73a0a3495263632415.png	\N	{"fat": 22.08, "carbs": 15.24, "fiber": 3.73, "sugar": 1.76, "protein": 3.16, "calories": 272.34, "cholesterol": 0}	181.0333337943316	2022-08-30 20:01:04.664	\N
73	Tuna Macaroni Pasta	\N	\N	5400	90 minutes	7	12 oz penne\n10 oz tuna in oil\n1 cup mayonnaise\n1/2 tsp ground black pepper.\n1/2 cup corn\n1/2 cup diced red bell pepper\n2 tbsp basil	7	4	\N	https://storage.googleapis.com/sg-uploads/6b22fc9dc3d248749bd221ce2861a604.jpg	\N	{"fat": 43.66, "carbs": 37.34, "fiber": 4.2, "sugar": 4.06, "protein": 23.02, "calories": 634.4, "cholesterol": 56.41}	961.9228425443316	2022-08-30 20:01:04.578	\N
75	Zucchini And Potato Scrambled Eggs	\N	\N	2700	45 minutes	8	2 zucchinis, sliced\n1 potato, chopped\n2 tbsp olive oil\nSalt, to taste\nFreshly ground black pepper, to taste\n8 eggs\n1 tsp dried parsley\n2 tbsp lemon juice	8	2	\N	https://storage.googleapis.com/sg-uploads/d96f02d52eee4acf998ee3082ec2fe58.jpg	\N	{"fat": 33.11, "carbs": 9.46, "fiber": 2.2, "sugar": 1.15, "protein": 29.1, "calories": 452.22, "cholesterol": 744}	743.9333333333334	2022-08-30 20:01:04.583	\N
77	Tuna Stuffed Avocado	\N	\N	600	10 minutes	7	1 avocado, halved and pitted\n¼ can tuna, drained\n¼ cup diced cherry tomatoes\n½ cup coriander, roughly chopped, divided\n1 tbsp lime juice\nSalt, to taste\nBlack pepper, to taste	7	2	\N	https://storage.googleapis.com/sg-uploads/e81216908be04abfaa5e600777c469f1.jpg	\N	{"fat": 12.81, "carbs": 9.43, "fiber": 5.95, "sugar": 1.67, "protein": 8.46, "calories": 186.89, "cholesterol": 3.85}	285.45	2022-08-30 20:01:04.588	\N
78	Avocado Slices	avocado slices	\N	300	5.0 min	1	1/2 medium avocado, about 1/3 cup	1	1	\N	https://images.unsplash.com/photo-1543363136-7fbfcd3b240d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	{"fat": 11, "carbs": 6.4, "fiber": 5.03, "sugar": 0.49, "protein": 1.5, "calories": 130.54, "cholesterol": 0}	75	2022-08-30 20:01:04.597	\N
83	Tomato-Tuna Penne	\N	\N	1800	30 minutes	9	8 oz penne (or other pasta)\n3 tbsp olive oil, divided\n2 tbsp minced garlic\n3 tbsp chopped basil\n3 medium tomatoes, chopped\n½ cup tomato sauce\n6 oz tuna in olive oil, drained\nSalt, to taste\nFreshly ground black pepper, to taste	9	2	\N	https://storage.googleapis.com/sg-uploads/1b7dd03ec38b4ea58120327983097195.jpg	\N	{"fat": 28.36, "carbs": 49.39, "fiber": 5.84, "sugar": 0.9, "protein": 34.18, "calories": 589.55, "cholesterol": 30.62}	1069.74332375	2022-08-30 20:01:04.606	\N
84	Peanutty Peanut Cookies	peanutty peanut cookies	\N	1200	20 min	11	1/2 teaspoon baking powder\n3/4 cup peanut butter\n1 1/2 cups salted peanuts\n1 cup brown sugar\n1 tablespoon honey\n1 teaspoon vanilla extract\n1/3 cup sugar\n2 1/2 cups flour\n1/2 teaspoon baking soda\n2 large eggs\n3/4 cup butter	11	12	\N	https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/14/21/51/picjLspnW.jpg	\N	{"fat": 29.89, "carbs": 47.72, "fiber": 3.06, "sugar": 27.64, "protein": 11.8, "calories": 507.08, "cholesterol": 61.5}	1254.35	2022-08-30 20:01:04.615	\N
87	Avocado And Tuna Salad	avocado and tuna salad	\N	1800	15 minutes	7	2 tablespoons olive oil\n1/2 cup cucumbers\n1/2 cup celery\n1 cup tuna\n2 tablespoons lemon juice\n1 avocado\nPinch of sea salt to taste	7	1	\N	https://sg-data.storage.googleapis.com/images_bucket/a67358183da39f4a0d2d353bf97727fe.png	\N	{"fat": 51.5, "carbs": 18.29, "fiber": 4.51, "sugar": 3.3, "protein": 53.66, "calories": 751.25, "cholesterol": 106.53}	536.8916664721831	2022-08-30 20:01:04.626	\N
89	Kale And Sweet Potato Soup	kale and sweet potato soup	\N	1800	30 minutes	9	1 sweet potatoes\n1 cup coconut milk\n1/2 red pepper\n1 tablespoon ginger\n1 cup kale\n2 tablespoons olive oil\n1 cup chicken broth\n1/2 cup brown rice\n1 teaspoon turmeric	9	1	\N	https://sg-data.storage.googleapis.com/images_bucket/47842a13107a61c51819ce8771ef43ee.png	\N	{"fat": 104.12, "carbs": 122.85, "fiber": 14.18, "sugar": 17.11, "protein": 68.34, "calories": 1701.81, "cholesterol": 102.5}	804.6333333333333	2022-08-30 20:01:04.631	\N
90	Garlic Roasted Broccoli	garlic roasted broccoli	\N	2700	45 min	5	2 large heads of broccoli\nSalt & pepper\n2 cloves of garlic, diced\n1/4 cup avocado oil	4	4	\N	https://lh3.googleusercontent.com/WQp6tjCrzcwKgHd4ROi4MjMBh86dwIdQsnrqBLB6hCRE9mSdltZWtOoeE29JCWNHkv1d0PkBmfEapo6coBlD=s360	\N	{"fat": 13.8, "carbs": 3.52, "fiber": 2.98, "sugar": 0.79, "protein": 1.38, "calories": 143.79, "cholesterol": 0}	248.5	2022-08-30 20:01:04.636	\N
94	Keto Bacon-Wrapped Avocado Fries	\N	\N	1200	20 minutes	2	2 avocados, pitted\n9 oz bacon, thinly slice	2	3	\N	https://storage.googleapis.com/sg-uploads/2398813288884aa4afe18d766b781787.jpg	\N	{"fat": 16.89, "carbs": 9.67, "fiber": 6.7, "sugar": 1.43, "protein": 19.27, "calories": 267.77, "cholesterol": 40.82}	555.145708125	2022-08-30 20:01:04.65	\N
95	Avocado With Tomato	avocado with tomato	\N	300	5.0 min	2	1 medium tomato\n1 medium avocado	2	1	\N	https://images.unsplash.com/photo-1575000977355-8b2a719926c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80	\N	{"fat": 22.29, "carbs": 17.82, "fiber": 4.35, "sugar": 0.99, "protein": 4.83, "calories": 291.22, "cholesterol": 0}	308	2022-08-30 20:01:04.655	\N
100	Garlic Shrimp Pasta	\N	\N	1500	25 minutes	8	1 3/4 cup chicken broth\n2 cloves garlic, minced\n3 tbsp chopped parsley\n2 tbsp lemon juice\n1 lb shrimp, peeled and deveined\n12 oz spaghetti\nSalt, to taste\nGround black pepper, to taste	8	4	\N	https://storage.googleapis.com/sg-uploads/a67fdfa4590944bd95641ebb4a869dc5.jpg	\N	{"fat": 10.88, "carbs": 70.21, "fiber": 1.82, "sugar": 0.24, "protein": 52.32, "calories": 588.08, "cholesterol": 207}	1208.3366475	2022-08-30 20:01:04.665	\N
101	Salmon Sashimi	\N	\N	900	15 minutes	4	1 lb salmon\n1 lemon, grated and juiced\n1 tbsp olive oil\nBlack pepper, to taste	4	3	\N	https://storage.googleapis.com/sg-uploads/f3c05bc08fc141178ab21a0ba1f7816f.jpg	\N	{"fat": 24.87, "carbs": 2.29, "fiber": 0.74, "sugar": 0.49, "protein": 31.17, "calories": 357.7, "cholesterol": 83.16}	527.39237	2022-08-30 20:01:04.68	\N
106	Carrot And Cabbage Slaw	carrot and cabbage slaw	\N	300	5.0 min	2	2 1/4 cups cabbage\n3 medium carrots	2	1	\N	https://images.unsplash.com/photo-1572357312640-8438ee3ce403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80	\N	{"fat": 1.12, "carbs": 48.4, "fiber": 10.13, "sugar": 24.61, "protein": 6.13, "calories": 228.24, "cholesterol": 0}	584.25	2022-08-30 20:01:04.688	\N
108	Zucchini Spears	zucchini spears	\N	300	5.0 min	1	1 medium zucchini	1	1	\N	https://images.unsplash.com/photo-1499125650409-2c437d5cca77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80	\N	{"fat": 0.4, "carbs": 3.86, "fiber": 1.96, "sugar": 3.1, "protein": 1.5, "calories": 25, "cholesterol": 0}	124	2022-08-30 20:01:04.697	\N
86	Garlic-Broccoli Stir Fry With Shrimp	\N	\N	1800	30 minutes	7	¾ lb large shrimp, peeled and deveined\n6 cloves garlic, minced\n4 cups broccoli florets\n3 onions, diced\n2 tbsp soy sauce\n3 tbsp sesame oil, divided\nSalt, to taste	7	2	\N	https://storage.googleapis.com/sg-uploads/e5ea71d95e5c4b20aa94e7fe57edceb5.jpg	\N	{"fat": 21.38, "carbs": 39.98, "fiber": 9.15, "sugar": 13.67, "protein": 43.35, "calories": 525.71, "cholesterol": 226.23}	1284.5942775	2022-08-30 20:01:04.623	\N
88	Pasta Primavera	pasta primavera	\N	1800	30 min	6	2 tablespoons grated Parmesan cheese\n1 1/2 teaspoons all-purpose flour\n1/4 cup margarine\n1 envelope dry vegetable soup mix\n1 (8 ounce) package dry pasta\n1 1/2 cups milk	6	4	\N	http://lh5.ggpht.com/SIG6DoKvxKpVVgGYz7cf0wEijIZMeX1a2P6Ho7eJCsEYkdo_bGPduUVrMf8dWmWGLYIkU_700QLCVvAV-jygtg=s360	\N	{"fat": 16.41, "carbs": 7.15, "fiber": 0.03, "sugar": 4.63, "protein": 6.03, "calories": 200.37, "cholesterol": 17.1}	484.7302761077881	2022-08-30 20:01:04.627	\N
91	Stir-Fried Cabbage	\N	\N	900	15 minutes	6	2 tbsp olive oil\n7 garlic cloves, crushed and chopped\n15 oz green cabbage, cored, sliced\n¾ cup raw peanuts, chopped\n3 tbsp thai fish sauce\nFreshly ground black pepper, to taste	6	2	\N	https://storage.googleapis.com/sg-uploads/5582ee61c7cb4467bd23ff3d9192076b.jpg	\N	{"fat": 43.56, "carbs": 25.4, "fiber": 10.26, "sugar": 9.4, "protein": 21.31, "calories": 578.86, "cholesterol": 11.69}	641.5428468749999	2022-08-30 20:01:04.638	\N
92	Spiced Apple Slices For Two	spiced apple slices for two	\N	1500	25 Min	6	1 teaspoon all-purpose flour\n1 large baking apple, cored, peeled and thinly sliced (Granny Smith works well)\n2 tablespoons butter or 2 tablespoons margarine, melted\n1 tablespoon lemon juice\n1/4 teaspoon ground cinnamon\n1 1/2 tablespoons brown sugar	6	2	\N	https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/26/83/31/pickAR5Nm.jpg	\N	{"fat": 12.57, "carbs": 39.16, "fiber": 3.13, "sugar": 3.1, "protein": 3.22, "calories": 282.69, "cholesterol": 1.69}	317.9666666666666	2022-08-30 20:01:04.642	\N
93	Paleo Cauliflower Rice	\N	\N	900	placeholder	5	1 cauliflower head\n2 tbsp olive oil\n2 tsp cumin\nSalt, to taste\nGround black pepper, to taste	5	2	\N	https://storage.googleapis.com/sg-uploads/1ecf12ad075743e68c03963f66bb2f1a.jpg	\N	{"fat": 14.71, "carbs": 21.61, "fiber": 9.69, "sugar": 8.03, "protein": 8.18, "calories": 251.59, "cholesterol": 0}	881.3	2022-08-30 20:01:04.646	\N
96	Cucumber Spears	cucumber spears	\N	300	5.0 min	1	2 medium cucumbers	1	1	\N	https://images.unsplash.com/photo-1493882946517-213a21fe70f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80	\N	{"fat": 0.23, "carbs": 7.55, "fiber": 3.01, "sugar": 3.47, "protein": 1.35, "calories": 37.67, "cholesterol": 0}	208	2022-08-30 20:01:04.657	\N
102	Mango Chunks	mango chunks	\N	300	5.0 min	1	1 medium mango	1	1	\N	https://images.unsplash.com/photo-1579246135369-ca8435a5cada?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	{"fat": 0.63, "carbs": 24.72, "fiber": 5.38, "sugar": 22.54, "protein": 1.35, "calories": 109.92, "cholesterol": 0}	165	2022-08-30 20:01:04.681	\N
105	Fried Salmon With Ratatouille	\N	\N	1200	20 minutes	10	8 oz salmon fillet\n3 tbsp olive oil\n1 eggplant, diced\n1 red bell pepper, chopped\n2 zucchini, diced\n1 garlic clove, peeled and finely chopped\nSalt, to taste\nBlack pepper, to taste\n1 red onion, peeled and diced\n1 cup tomato sauce	10	2	\N	https://storage.googleapis.com/sg-uploads/64e11a7451f740dd9cea67cd831fb6c9.jpg	\N	{"fat": 36.54, "carbs": 30.03, "fiber": 6.11, "sugar": 7.47, "protein": 30.14, "calories": 569.54, "cholesterol": 62.37}	1129.196185	2022-08-30 20:01:04.687	\N
107	Edamame	edamame	\N	300	5.0 min	1	3/4 cup frozen edamame in the pod	1	1	\N	https://images.unsplash.com/photo-1575262599410-837a72005862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1399&q=80	\N	{"fat": 4.19, "carbs": 6.73, "fiber": 4.25, "sugar": 2.19, "protein": 9.93, "calories": 104.33, "cholesterol": 0}	88.5	2022-08-30 20:01:04.695	\N
111	Broccoli Florets	broccoli florets	\N	300	5.0 min	1	1/2 cup broccoli florets	1	1	\N	https://images.unsplash.com/photo-1518164147695-36c13dd568f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMjE0Mn0	\N	{"fat": 0, "carbs": 2, "fiber": 1.5, "sugar": 0.5, "protein": 1.5, "calories": 14.01, "cholesterol": 0}	42.5	2022-08-30 20:01:04.707	\N
113	Celery With Peanut Butter	celery with peanut butter	\N	300	5 minutes	2	1 cup celery\n2 tablespoons peanut butter	2	1	\N	https://sg-data.storage.googleapis.com/images_bucket/fbaf6cb4267ad3fffff807371561dbf9.png	\N	{"fat": 16.74, "carbs": 10.19, "fiber": 3.22, "sugar": 4.74, "protein": 7.86, "calories": 222.83, "cholesterol": 0}	133.25	2022-08-30 20:01:04.711	\N
104	Low Carb Zucchini Chips	\N	\N	7800	130 minutes	3	2 zucchini, thinly sliced\n1 tbsp olive oil\nSalt, to taste	3	1	\N	https://storage.googleapis.com/sg-uploads/779421b0caad46f7a8eb979e98856203.jpg	\N	{"fat": 14.46, "carbs": 7.46, "fiber": 2.64, "sugar": 0, "protein": 6.5, "calories": 186.01, "cholesterol": 0}	259.1	2022-08-30 20:01:04.684	\N
109	Apple With Almond Butter	apple with almond butter	\N	300	5.0 min	2	1 green apple\n2 tablespoons almond butter	2	1	\N	https://storage.googleapis.com/sg-uploads/7480444c147e404e8dd259e560db764d.jpeg	\N	{"fat": 18.73, "carbs": 65.1, "fiber": 15, "sugar": 1, "protein": 12.15, "calories": 477.54, "cholesterol": 0}	278	2022-08-30 20:01:04.701	\N
110	Bacon Avocado Fries	\N	\N	1200	20 minutes	2	2 avocados\n6 oz bacon, striped	2	3	\N	https://storage.googleapis.com/sg-uploads/4faeb31c365f4b1fa1bf801579d3d501.jpg	\N	{"fat": 16.15, "carbs": 9.29, "fiber": 6.7, "sugar": 1.17, "protein": 13.52, "calories": 236.53, "cholesterol": 27.22}	470.09713875	2022-08-30 20:01:04.706	\N
\.


--
-- Data for Name: RecipeCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RecipeCategory" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Dinner	\N	2022-08-30 20:00:13.441	\N
2	Breakfast	\N	2022-08-30 20:00:13.442	\N
3	Snack	\N	2022-08-30 20:00:13.443	\N
4	Lunch	\N	2022-08-30 20:00:13.445	\N
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
1	3
2	9
2	10
2	12
3	14
4	18
2	19
5	22
6	25
7	25
7	28
8	36
9	38
4	40
7	40
1	41
10	42
1	52
6	57
11	57
4	72
11	74
6	85
7	93
5	101
7	103
12	103
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
61	1
66	1
69	1
72	1
86	1
92	1
95	1
111	1
122	1
6	2
16	2
20	2
21	2
22	2
23	2
34	2
48	2
56	2
57	2
63	2
64	2
67	2
68	2
76	2
77	2
91	2
94	2
100	2
106	2
108	2
121	2
7	3
12	3
13	3
14	3
29	3
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
62	4
71	4
75	4
81	4
103	4
110	4
1	5
5	5
8	5
9	5
10	5
11	5
18	5
35	5
36	5
39	5
40	5
41	5
44	5
46	5
47	5
49	5
53	5
55	5
60	5
70	5
79	5
80	5
82	5
83	5
84	5
96	5
99	5
105	5
114	5
116	5
117	5
118	5
119	5
15	6
17	6
33	6
45	6
54	6
58	6
65	6
73	6
74	6
78	6
85	6
98	6
102	6
104	6
107	6
109	6
112	6
115	6
120	6
\.


--
-- Data for Name: _IngredientToRecipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_IngredientToRecipe" ("A", "B") FROM stdin;
9	1
21	1
28	1
53	1
56	1
77	1
79	1
93	1
96	1
98	1
119	1
15	2
25	2
52	2
58	2
75	2
77	2
78	2
89	2
91	2
98	2
15	3
19	3
56	3
75	3
77	3
91	3
98	3
117	3
1	4
19	4
20	4
64	4
67	4
75	4
91	4
98	4
15	5
52	5
53	5
57	5
77	5
98	5
113	5
12	6
15	6
19	6
77	6
79	6
91	6
98	6
39	7
52	7
76	7
77	7
93	7
98	7
106	7
7	8
15	8
19	8
53	8
91	8
98	8
100	8
103	8
12	9
15	9
21	9
53	9
56	9
60	9
79	9
96	9
98	9
99	9
104	9
26	10
42	10
52	10
77	10
98	10
122	10
7	11
15	11
52	11
59	11
75	11
98	11
1	12
15	12
19	12
21	12
53	12
76	12
77	12
79	12
98	12
117	12
1	13
8	13
10	13
21	13
27	13
36	13
37	13
52	13
75	13
83	13
92	13
98	13
107	13
118	13
25	14
52	14
61	14
77	14
79	14
85	14
91	14
98	14
118	14
52	15
53	15
68	15
96	15
98	15
15	16
16	16
53	16
57	16
65	16
88	16
91	16
98	16
104	16
112	16
15	17
22	17
52	17
53	17
75	17
79	17
98	17
64	18
66	18
68	18
90	18
98	18
107	18
119	18
12	19
15	19
18	19
20	19
21	19
52	19
56	19
77	19
93	19
98	19
111	19
112	19
16	20
21	20
31	20
42	20
53	20
57	20
60	20
76	20
104	20
15	21
52	21
53	21
77	21
91	21
98	21
106	21
53	22
56	22
76	22
77	22
96	22
98	22
122	22
15	23
42	23
53	23
96	23
98	23
111	23
121	23
122	23
52	24
53	24
74	24
77	24
79	24
91	24
97	24
15	25
30	25
53	25
59	25
76	25
98	25
119	25
9	26
15	26
53	26
57	26
76	26
96	26
98	26
119	26
122	26
11	27
13	27
14	27
23	27
41	27
46	27
53	27
57	27
69	27
77	27
79	27
96	27
98	27
102	27
111	27
15	30
53	30
57	30
69	30
80	30
98	30
113	30
53	31
75	31
91	31
95	31
97	31
98	31
103	31
106	31
15	32
52	32
53	32
77	32
98	32
122	32
15	33
19	33
52	33
57	33
98	33
100	33
106	33
21	35
52	35
53	35
55	35
98	35
53	36
56	36
77	36
96	36
98	36
112	36
117	36
15	38
19	38
20	38
49	38
77	38
98	38
52	40
56	40
60	40
64	40
87	40
104	40
15	41
53	41
56	41
79	41
84	41
98	41
111	41
112	41
122	41
15	42
52	42
53	42
77	42
98	42
106	42
16	51
52	51
53	51
91	51
117	51
15	53
53	53
56	53
77	53
98	53
105	53
113	53
70	55
99	55
104	55
110	55
4	59
7	59
15	59
52	59
98	59
4	60
35	60
53	60
56	60
77	60
79	60
101	60
111	60
7	68
28	68
52	68
53	68
79	68
6	71
34	71
50	71
52	71
71	71
76	71
77	71
120	71
24	72
29	72
33	72
40	72
54	72
56	72
60	72
77	72
119	72
3	76
15	76
63	76
65	76
69	76
74	76
79	76
98	76
4	79
7	79
15	79
98	79
2	81
3	81
15	97
32	97
53	97
98	97
109	97
53	104
98	104
122	104
15	28
38	28
52	28
53	28
98	28
1	34
15	34
19	34
31	34
53	34
76	34
98	34
100	34
4	37
28	37
52	37
53	37
76	37
121	37
15	43
52	43
75	43
79	43
98	43
110	43
15	50
16	50
21	50
22	50
69	50
79	50
97	50
98	50
117	50
15	56
19	56
52	56
69	56
79	56
98	56
70	98
99	98
104	98
110	98
53	103
56	103
77	103
96	103
111	103
112	103
117	103
72	112
15	29
22	29
35	29
53	29
56	29
69	29
77	29
98	29
3	39
19	39
21	39
30	39
45	39
53	39
77	39
91	39
19	44
53	44
57	44
98	44
101	44
15	46
52	46
53	46
91	46
94	46
98	46
53	47
69	47
79	47
97	47
98	47
114	47
9	48
15	48
52	48
53	48
79	48
98	48
106	48
9	58
53	58
57	58
77	58
98	58
122	58
15	62
28	62
53	62
57	62
69	62
98	62
101	62
122	62
15	65
53	65
98	65
122	65
15	66
53	66
69	66
79	66
96	66
98	66
113	66
4	69
23	69
43	69
53	69
69	69
98	69
113	69
53	70
57	70
76	70
79	70
104	70
9	73
15	73
42	73
74	73
84	73
93	73
113	73
15	75
52	75
53	75
69	75
79	75
91	75
98	75
122	75
4	77
15	77
28	77
41	77
70	77
98	77
113	77
4	78
9	83
15	83
53	83
56	83
84	83
98	83
111	83
112	83
113	83
8	84
10	84
17	84
19	84
52	84
55	84
65	84
81	84
82	84
107	84
116	84
4	87
23	87
43	87
53	87
69	87
98	87
113	87
18	89
31	89
38	89
53	89
60	89
67	89
95	89
108	89
114	89
5	90
16	90
56	90
85	90
98	90
4	94
7	94
4	95
111	95
15	100
31	100
56	100
69	100
79	100
98	100
101	100
105	100
15	101
53	101
69	101
97	101
20	106
21	106
122	108
2	109
3	109
4	110
7	110
7	45
28	45
52	45
53	45
79	45
15	49
19	49
52	49
97	49
98	49
15	52
16	52
53	52
56	52
69	52
98	52
15	54
53	54
56	54
79	54
95	54
98	54
105	54
15	57
53	57
56	57
97	57
98	57
108	57
21	61
31	61
38	61
53	61
111	61
122	61
15	63
28	63
52	63
53	63
79	63
98	63
52	64
15	67
16	67
30	67
31	67
53	67
56	67
96	67
98	67
121	67
15	74
19	74
53	74
56	74
69	74
79	74
101	74
86	80
15	82
21	82
30	82
53	82
56	82
79	82
91	82
98	82
121	82
15	85
53	85
57	85
69	85
79	85
98	85
101	85
122	85
16	86
56	86
77	86
98	86
99	86
101	86
104	86
1	88
47	88
62	88
73	88
75	88
115	88
15	91
53	91
54	91
57	91
63	91
82	91
1	92
3	92
17	92
19	92
36	92
69	92
15	93
22	93
44	93
53	93
98	93
43	96
4	99
15	99
69	99
72	102
15	105
51	105
53	105
56	105
93	105
94	105
97	105
98	105
112	105
122	105
48	107
16	111
23	113
81	113
\.


--
-- Data for Name: _RecipeToRecipeCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_RecipeToRecipeCategory" ("A", "B") FROM stdin;
1	1
1	4
6	1
6	4
7	1
7	4
8	1
8	4
12	1
12	4
14	2
16	1
16	4
18	1
18	4
21	1
21	4
45	2
49	2
57	1
57	4
61	1
63	2
64	3
67	1
67	4
74	3
80	3
82	1
82	4
85	1
85	4
86	1
86	4
88	1
91	1
91	4
92	3
93	1
93	4
96	3
3	1
3	4
10	3
15	1
15	4
17	2
22	1
22	4
29	1
29	4
39	1
39	4
44	1
44	4
46	1
46	4
47	1
47	4
48	2
58	1
58	4
62	1
62	4
65	3
66	1
66	4
69	1
70	1
70	4
73	1
73	4
75	2
77	3
78	3
83	1
83	4
84	3
87	1
89	1
94	3
95	3
100	1
100	4
101	1
101	4
106	3
108	3
109	3
110	3
4	1
4	4
9	1
9	4
19	1
19	4
20	1
20	3
20	4
24	1
24	4
28	2
34	1
34	4
37	2
43	2
50	1
50	4
56	2
98	1
98	4
103	1
103	4
52	1
52	4
54	1
54	4
99	2
102	3
105	1
105	4
107	3
111	3
113	3
2	2
5	2
11	2
23	1
23	4
25	1
25	4
26	1
26	4
30	1
30	4
31	1
31	4
32	2
33	2
35	3
36	3
38	1
38	4
40	1
40	4
41	1
41	4
42	2
53	1
53	4
55	1
55	4
59	2
60	3
68	2
71	2
72	1
72	4
76	3
79	2
81	3
97	1
97	4
104	3
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
074bc2d0-6640-4103-9475-bff405f28881	6d7f7e6675bb039340e820b2062c4f99f773af4649adfd36857603716c2aa85e	2022-08-30 20:19:56.284715+00	20220830195839_initialize_ingredeck_database	\N	\N	2022-08-30 20:19:56.248778+00	1
8f88f648-ff2d-4c7c-b4c6-a0e9a0183951	6d7f7e6675bb039340e820b2062c4f99f773af4649adfd36857603716c2aa85e	2022-08-30 19:59:06.001737+00	20220830195839_initialize_ingredeck_database	\N	\N	2022-08-30 19:59:05.959358+00	1
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

SELECT pg_catalog.setval('public."Recipe_id_seq"', 113, true);


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

