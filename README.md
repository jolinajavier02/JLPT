# NihongoMastery - JLPT Learning Platform

A modern, interactive web application designed to help learners master Japanese language fundamentals for the JLPT (Japanese Language Proficiency Test).

## 🎯 Features

### Character Learning Systems
- **Hiragana Chart**: Interactive learning tool for all 46 basic hiragana characters plus dakuten and yōon combinations
- **Katakana Chart**: Comprehensive katakana character reference with the same interactive features
- **Kanji Study**: Essential kanji characters organized by JLPT levels
- **Stroke Order Animations**: Visual guides showing proper character writing techniques

### Grammar & Particles
- **Grammar Mastery**: Book-style layout presenting core Japanese grammar patterns
  - Sentence structure (SOV)
  - Verb conjugations
  - Adjective forms
  - Question patterns
  - Te-form usage
- **Essential Particles**: Interactive lessons on Japanese particles (は, が, を, に, で, の, と, も, か)
- **Navigation**: Previous/Next buttons for seamless lesson progression

### Vocabulary Builder
- **Categorized Word Lists**: Organized by topics (persons, body parts, time, directions, etc.)
- **Conjugation Display**: Shows past tense and negative forms for each word
- **Search Functionality**: Quick lookup for specific vocabulary items

### Interactive Features
- **Flashcard System**: Click-to-flip cards for active recall practice
- **Character Detail View**: In-depth information for each kana character
- **Tabbed Navigation**: Switch between Basic, Dakuten, and Yōon charts instantly
- **Single-Screen Design**: Optimized layouts that fit perfectly within viewport

## 🎨 Design Philosophy

### Visual Identity
- **Primary Color**: Japan Red (#BC002D) - representing traditional Japanese aesthetics
- **Typography**: 
  - Inter for Latin text
  - Noto Sans JP for Japanese characters
- **Layout**: Clean, modern interface with premium glassmorphism effects
- **Animations**: Smooth transitions and micro-interactions for enhanced UX

### User Experience
- **Responsive Design**: Optimized for various screen sizes
- **No-Scroll Layouts**: Key learning pages fit within single viewport
- **Instant Feedback**: Color changes and highlights on interaction
- **Consistent Navigation**: Unified header across all pages

## 📁 Project Structure

```
JLPT/
├── index.html              # Landing page
├── home.html              # Main dashboard
├── learn.html             # Learning modules overview
├── hiragana.html          # Hiragana character chart
├── katakana.html          # Katakana character chart
├── kanji.html             # Kanji learning module
├── grammar.html           # Grammar lessons
├── particles.html         # Particle explanations
├── vocabulary.html        # Vocabulary builder
├── styles.css             # Global styles and design system
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely client-side

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate through the learning modules using the dashboard

### Local Development
```bash
# Simply open the HTML files in your browser
open index.html

# Or use a local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎓 Learning Path

### Recommended Study Order
1. **Start with Kana**: Master hiragana first, then katakana
2. **Basic Grammar**: Learn sentence structure and particles
3. **Vocabulary Building**: Expand word knowledge in parallel
4. **Kanji Introduction**: Begin with JLPT N5 level characters
5. **Advanced Grammar**: Progress to complex sentence patterns

### Study Tips
- Use the flashcard system for daily review
- Practice writing characters using the stroke order guides
- Create example sentences using learned grammar patterns
- Review particles regularly as they're fundamental to Japanese

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **Vanilla JavaScript**: No framework dependencies
- **SVG**: Stroke order animations
- **Google Fonts**: Typography (Inter, Noto Sans JP)

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design included

### Performance
- Lightweight: No heavy frameworks
- Fast loading: Minimal external dependencies
- Smooth animations: CSS-based transitions
- Efficient rendering: Optimized DOM manipulation

## 📝 Content Organization

### Grammar Topics
- Sentence Basics (SOV structure)
- Verb Basics (る-verbs, う-verbs)
- Adjectives (い-adjectives, な-adjectives)
- Questions & Existence (か, います, あります)
- Te-form (て-form conjugations)

### Particle Coverage
- は (wa) - Topic marker
- が (ga) - Subject marker
- を (o) - Direct object marker
- に (ni) - Direction/time/location
- で (de) - Location of action/means
- の (no) - Possessive/modification
- と (to) - "And" connector/quotation
- も (mo) - "Also/too"
- か (ka) - Question marker

### Vocabulary Categories
- People & Relationships
- Body Parts & Organs
- Time Expressions
- Directions & Locations
- Common Verbs & Adjectives

## 🎯 Future Enhancements

- [ ] Audio pronunciation guides
- [ ] Practice quizzes and tests
- [ ] Progress tracking system
- [ ] Spaced repetition algorithm
- [ ] User accounts and saved progress
- [ ] Mobile app version
- [ ] Additional JLPT levels (N4-N1)
- [ ] Community features

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit pull requests.

## 📧 Contact

For questions or feedback about this learning platform, please open an issue in the repository.

## 🙏 Acknowledgments

- Character stroke order data from KanjiVG project
- Japanese language resources from various JLPT study materials
- Design inspiration from modern Japanese web aesthetics

---

**Happy Learning! がんばって！(Ganbatte!)**
