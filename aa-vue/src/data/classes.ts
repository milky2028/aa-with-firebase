export interface AAClass {
  routeName: string;
  displayName: string;
  subtitle: string;
  ageRange: {
    start: number;
    end: number;
  };
  image: string;
  prices: {
    daysPerWeek: number;
    price: number | string;
  }[];
  meals: string;
  parentNotes: string;
  description: string;
  timesOffered: string;
}

const parentNotes =
  'Please supply one or more extra changes of clothes, as well as diapers and wipes for your child. Please also supply your child with a blanket for nap time.';

function meals(usesSippyCups = false) {
  return `Breakfast, lunch, morning snacks, and afternoon snacks are all provided. ${
    usesSippyCups
      ? 'Sippy cups are also provided for children who need them.'
      : ''
  }`;
}

function timesOffered(className: string) {
  return `All our ${className} classes are offered Monday - Friday, from 6:30am to 6:00pm.`;
}

const classes: AAClass[] = [
  {
    routeName: 'infants',
    displayName: 'Infants',
    subtitle: 'Learn and Play',
    ageRange: {
      start: 0,
      end: 12
    },
    image: 'nursery.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 140
      },
      {
        daysPerWeek: 3,
        price: 175
      },
      {
        daysPerWeek: 4,
        price: 200
      },
      {
        daysPerWeek: 5,
        price: 215
      }
    ],
    meals:
      'Table food is provided for infants who are table-food-ready, including breakfast, lunch, morning snack, and afternoon snack. Whole milk is provided when your child is ready to make the switch from formula or breast mIlk.  Sippy cups are also provided when your child is ready.',
    parentNotes:
      'Parents provide diapers, wipes, bottles, and baby food (when ready).',
    description:
      "From helpless newborn to active toddler, your child will grow and learn more in their first 12 months than any other time of their life. Your child's safety is key to our nursery caregivers, and for this reason, we practice safe sleep as recommended by The American Academy of pediatrics. Each crib is used by only one child. The crib sheets are changed daily and the cribs are sanitized weekly. At Adventure Academy, we help to foster this time of growth by talking, singing, reading, and being face to face with your child.  Our Nursery Caregivers will cuddle, coo, and nurture your child to help your child feel not only safe, but also loved. These early months create a foundation for the fundamental building blocks your child will use to learn throughout their entire life!",
    timesOffered: timesOffered('Infant')
  },
  {
    routeName: 'toddlers',
    displayName: 'Toddlers',
    subtitle: 'Question and Answer',
    ageRange: {
      start: 12,
      end: 24
    },
    image: 'toddlers.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 135
      },
      {
        daysPerWeek: 3,
        price: 160
      },
      {
        daysPerWeek: 4,
        price: 185
      },
      {
        daysPerWeek: 5,
        price: 200
      }
    ],
    meals: meals(true),
    parentNotes,
    description:
      "Active is often the first word that comes to mind when describing a Toddler. During these 12 months, children go from walking unsteadily to running constantly. Children aged 12-24 months are eager to explore and test everything. At Adventure Academy we want to foster that curiosity. We offer lots of time to move and explore, while also offering opportunities to sit and listen to books and try out sitting still (even if they won't stay put for long), but of course we still offer lots of time to cuddle.",
    timesOffered: timesOffered('Toddler')
  },
  {
    routeName: 'twos',
    displayName: 'Twos',
    subtitle: 'Speak and Listen',
    ageRange: {
      start: 24,
      end: 36
    },
    image: 'twos.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 135
      },
      {
        daysPerWeek: 3,
        price: 160
      },
      {
        daysPerWeek: 4,
        price: 185
      },
      {
        daysPerWeek: 5,
        price: 200
      }
    ],
    meals: meals(),
    parentNotes,
    description:
      'By the time a child enters his or her 2nd year, he or she has often become quite verbal and, though we may not understand every word, our attention to the stories they tell is crucial. Children aged 24-36 months are starting to understand their part in the world around them, and they see themselves placed directly at the center of that world. At Adventure Academy, we will listen and encourage your child to express themselves in ways that are positive.  We will continue to give them lots of large motor control exercises, while also helping them to hone those small motor skills.',
    timesOffered: timesOffered('Twos')
  },
  {
    routeName: 'threes',
    displayName: 'Threes',
    subtitle: 'Move and Explore',
    ageRange: {
      start: 36,
      end: 48
    },
    image: 'threes.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 125
      },
      {
        daysPerWeek: 3,
        price: 150
      },
      {
        daysPerWeek: 4,
        price: 170
      },
      {
        daysPerWeek: 5,
        price: 185
      }
    ],
    meals: meals(),
    parentNotes,
    description:
      'Questions, questions and more questions. Three year olds have lots of questions. What is that? Why? Where? How? At Adventure Academy, we will seek to help your child explore their world to find the answers to all of the questions in their minds. We will encourage good choices and encourage children in the academic ideas that may be new to them but will help them in their future success.',
    timesOffered: timesOffered('Threes')
  },
  {
    routeName: 'fours-and-fives',
    displayName: 'Fours and Fives',
    subtitle: 'Grow and Develop',
    ageRange: {
      start: 48,
      end: 60
    },
    image: 'fours.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 115
      },
      {
        daysPerWeek: 3,
        price: 140
      },
      {
        daysPerWeek: 4,
        price: 160
      },
      {
        daysPerWeek: 5,
        price: 175
      }
    ],
    meals: meals(),
    parentNotes,
    description:
      'Four and five-year-olds are big kids, but they’re still just kids. They are learning so much so quickly and still need lots of time to simply play, but a tremendous amount can be learned through play! At Adventure Academy, we balance the time we have with your child between time to explore and play and time to master academic skills that will help children succeed in their journey of learning in elementary school and beyond. We’ll still get messy and have lots of fun, but all while fostering a strong grasp of the skills that will help your child love learning for years to come.',
    timesOffered: timesOffered('Fours and Fives')
  },
  {
    routeName: 'am-preschool',
    displayName: 'A.M. Preschool',
    subtitle: 'Create and Engage',
    ageRange: {
      start: 3,
      end: 5
    },
    image: 'am-preschool.jpg',
    prices: [
      {
        daysPerWeek: 2,
        price: 'Not Offered'
      },
      {
        daysPerWeek: 3,
        price: 95
      },
      {
        daysPerWeek: 4,
        price: 115
      },
      {
        daysPerWeek: 5,
        price: 130
      }
    ],
    meals: meals(true),
    parentNotes,
    description:
      "A.M. Preschool is a great option for parents who don't need childcare for their child all day, but would still like to begin to acclimate their child to a daily schedule similar to elementary school or kindergarten. A.M. Preschool is also a great option for children to establish regular social behaviors, developing friendships, learning to collaborate and and create with others, and having fun with new people! Offered from 9:00am to 12:30pm, A.M. Preschool is a fantastic way to begin the adventure of learning and growing!",
    timesOffered:
      'All A.M. Preschool classes are offered Monday - Friday, from 9:00am to 12:30pm. A.M. Preschool is only for 3-5 year olds.'
  }
];

export default classes;
