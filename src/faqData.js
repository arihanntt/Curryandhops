// === File: src/faqData.js ===
const faqData = [
  {
    question: "What are your opening hours?",
    answer: "We’re open daily from 11:00 AM to 11:00 PM.",
    followUps: ["Are you open on weekends?", "Do you serve food all day?"],
  },
  {
    question: "Are you open on weekends?",
    answer: "Yes, we’re open all 7 days a week, including weekends and holidays.",
  },
  {
    question: "Do you serve food all day?",
    answer: "Yes, our kitchen operates from 11:00 AM to 11:00 PM with no breaks.",
  },
  {
    question: "What kind of food do you serve?",
    answer: "We specialize in modern Indian cuisine with a contemporary twist.",
    followUps: ["Do you serve vegetarian options?", "Do you have spicy dishes?"],
  },
  {
    question: "Do you serve vegetarian options?",
    answer: "Absolutely! We have a wide range of vegetarian and vegan dishes.",
  },
  {
    question: "Do you have spicy dishes?",
    answer: "Yes, many of our dishes are moderately spicy, but we can adjust spice levels on request.",
  },
  {
    question: "Do you have parking space?",
    answer: "Yes, we offer dedicated parking for our guests right outside the restaurant.",
    followUps: ["Is parking free?", "Is valet parking available?"],
  },
  {
    question: "Is parking free?",
    answer: "Yes, parking is completely free for all dine-in customers.",
  },
  {
    question: "Is valet parking available?",
    answer: "Currently, we don’t offer valet service, but self-parking is easy and secure.",
  },
  {
    question: "Can I reserve a table?",
    answer: "Yes! You can reserve a table through our website or by calling us.",
    followUps: ["Can I reserve for a large group?", "Is walk-in allowed?"],
  },
  {
    question: "Can I reserve for a large group?",
    answer: "Yes, we accommodate groups of up to 30 people with prior notice.",
  },
  {
    question: "Is walk-in allowed?",
    answer: "Absolutely! Walk-ins are welcome based on availability.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer delivery via Zomato, Swiggy, and our website.",
    followUps: ["What is the minimum order for delivery?", "Do you deliver to my area?"],
  },
  {
    question: "What is the minimum order for delivery?",
    answer: "The minimum order amount is ₹300 for delivery.",
  },
  {
    question: "Do you deliver to my area?",
    answer: "We deliver within a 7km radius. Please enter your location at checkout to confirm.",
  },
  {
    question: "Do you serve alcohol?",
    answer: "Yes, we have a curated bar menu with signature cocktails, mocktails, and more.",
    followUps: ["Do you have happy hour offers?", "Can I reserve bar seating?"],
  },
  {
    question: "Do you have happy hour offers?",
    answer: "Yes, we offer happy hour from 4:00 PM to 7:00 PM every weekday.",
  },
  {
    question: "Can I reserve bar seating?",
    answer: "Yes, just mention your preference while reserving and we’ll accommodate you.",
  },
  {
    question: "Do you host private events?",
    answer: "Yes, we host birthdays, anniversaries, and corporate events with customized setups.",
    followUps: ["What’s the cost for private events?", "Can you provide catering for events?"],
  },
  {
    question: "What’s the cost for private events?",
    answer: "Pricing depends on the number of guests and requirements. Contact us for a quote.",
  },
  {
    question: "Can you provide catering for events?",
    answer: "Yes, we offer both in-house and outdoor catering for events.",
  },
  {
    question: "Is your restaurant family-friendly?",
    answer: "Yes! We welcome families and have high chairs and a kids’ menu available.",
    followUps: ["Do you have a kids’ menu?", "Is the restaurant baby-friendly?"],
  },
  {
    question: "Do you have a kids’ menu?",
    answer: "Yes, we have a special kids’ menu with mild, nutritious meals.",
  },
  {
    question: "Is the restaurant baby-friendly?",
    answer: "Yes, we provide high chairs and baby-friendly restrooms.",
  },
  {
    question: "Do you offer vegan options?",
    answer: "Yes! Many of our dishes are plant-based or can be customized to be vegan.",
    followUps: ["Are vegan options clearly marked?", "Can I ask for no dairy?"],
  },
  {
    question: "Are vegan options clearly marked?",
    answer: "Yes, our menu has clear labels for vegan and gluten-free items.",
  },
  {
    question: "Can I ask for no dairy?",
    answer: "Of course! Just inform your server, and we’ll ensure your meal is dairy-free.",
  },
  {
    question: "Do you have live music or events?",
    answer: "Yes, we host live music nights every Friday and Saturday from 8 PM onwards.",
    followUps: ["Is there an entry charge?", "Can I book a table near the stage?"],
  },
  {
    question: "Is there an entry charge?",
    answer: "No, our live events are free for all dine-in guests.",
  },
  {
    question: "Can I book a table near the stage?",
    answer: "Yes, but it’s best to book in advance as these spots fill up quickly.",
  },
  {
    question: "Are pets allowed?",
    answer: "We’re pet-friendly on our outdoor patio. Pets must be leashed.",
    followUps: ["Do you provide water bowls for pets?", "Are large dogs allowed?"],
  },
  {
    question: "Do you provide water bowls for pets?",
    answer: "Yes, we offer water bowls and treats for your furry friends!",
  },
  {
    question: "Are large dogs allowed?",
    answer: "Yes, as long as they are well-behaved and on a leash.",
  },
  {
    question: "Do you accept UPI or card payments?",
    answer: "Yes, we accept UPI, debit/credit cards, and cash.",
    followUps: ["Do you offer contactless payment?", "Can I pay via QR code?"],
  },
  {
    question: "Do you offer contactless payment?",
    answer: "Yes, we support contactless cards and digital wallets.",
  },
  {
    question: "Can I pay via QR code?",
    answer: "Yes, we have QR codes available at each table for quick UPI payments.",
  },
  {
    question: "Do you have gift cards?",
    answer: "Yes! You can purchase digital or physical gift cards from our website or in person.",
    followUps: ["Can I customize a gift card?", "What is the gift card validity?"],
  },
  {
    question: "Can I customize a gift card?",
    answer: "Yes, you can choose the amount and add a personal message.",
  },
  {
    question: "What is the gift card validity?",
    answer: "Our gift cards are valid for 12 months from the date of issue.",
  },
  {
    question: "Is there a dress code?",
    answer: "No strict dress code, but smart casuals are appreciated.",
    followUps: ["Can I wear slippers?", "Are shorts allowed?"],
  },
  {
    question: "Can I wear slippers?",
    answer: "Yes, slippers are allowed, but we recommend casual or smart wear.",
  },
  {
    question: "Are shorts allowed?",
    answer: "Yes, feel free to wear shorts. We want you to be comfortable!",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer: "Yes, we provide complimentary Wi-Fi. Ask a server for the password.",
    followUps: ["Is the Wi-Fi fast?", "Do I need to register?"],
  },
  {
    question: "Is the Wi-Fi fast?",
    answer: "Our Wi-Fi is high-speed and suitable for video calls and streaming.",
  },
  {
    question: "Do I need to register?",
    answer: "No registration needed — just connect and enjoy!",
  },
];

export default faqData;
