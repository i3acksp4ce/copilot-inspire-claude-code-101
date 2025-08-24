# Plan: Auto-repeat Counter Feature

**Date:** August 24, 2025  
**Feature:** Hold-to-Repeat Counter Buttons  
**Status:** Planning Phase

## 🎯 Objective

Enhance the existing counter feature to support auto-repeat functionality when users hold down the increment (+1) or decrement (-1) buttons, making it easier to change values quickly without multiple clicks.

## 📋 Requirements

### Functional Requirements
1. **Hold-to-Repeat:** Buttons should auto-repeat when held down (mouse/touch)
2. **Timing Control:** Initial delay before repeat starts, then faster intervals
3. **Bounds Checking:** Maintain existing constraint (minimum value: 0)
4. **Platform Support:** Work on both desktop (mouse) and mobile (touch)
5. **Visual Feedback:** Clear indication when button is being held

### Technical Requirements
1. Use React event handlers (onMouseDown, onMouseUp, onMouseLeave)
2. Implement setInterval/clearInterval for auto-repeat timing
3. Add touch event support (onTouchStart, onTouchEnd)
4. Maintain TypeScript type safety
5. Preserve existing UI/UX with enhancements

### User Experience Requirements
1. **Intuitive Behavior:** Single click = single increment/decrement
2. **Hold Behavior:** Hold for 500ms → start auto-repeat every 100ms
3. **Release Response:** Stop immediately when button is released
4. **Visual Feedback:** Button state changes when held
5. **Accessibility:** Works with keyboard and screen readers

## 🎨 Design Specifications

### Timing Behavior
```
Click:     Single action
Hold 500ms: Start auto-repeat
Repeat:    Every 100ms while held
Release:   Stop immediately
```

### Visual States
- **Normal:** Default button appearance
- **Hover:** Existing hover effect
- **Active/Held:** Pressed state with visual indication
- **Disabled:** When counter = 0 for decrement button

### Animation Enhancements
- **Press Animation:** Subtle scale or shadow change when held
- **Counter Animation:** Smooth number transitions during auto-repeat
- **Button Pulse:** Optional pulse effect during auto-repeat

## 🔧 Technical Implementation

### State Management
```typescript
const [count, setCount] = useState(0);
const [isRepeating, setIsRepeating] = useState<'increment' | 'decrement' | null>(null);
const intervalRef = useRef<NodeJS.Timeout | null>(null);
```

### Auto-repeat Logic
```typescript
const startAutoRepeat = (action: 'increment' | 'decrement') => {
  setIsRepeating(action);
  
  // Initial delay before starting repeat
  const initialTimeout = setTimeout(() => {
    // Start repeating interval
    intervalRef.current = setInterval(() => {
      if (action === 'increment') {
        setCount(prev => prev + 1);
      } else if (action === 'decrement') {
        setCount(prev => Math.max(0, prev - 1));
      }
    }, 100); // Repeat every 100ms
  }, 500); // Start after 500ms hold
};

const stopAutoRepeat = () => {
  setIsRepeating(null);
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};
```

### Event Handlers
```typescript
// Mouse Events
const handleMouseDown = (action: 'increment' | 'decrement') => {
  // Single action first
  if (action === 'increment') setCount(prev => prev + 1);
  else setCount(prev => Math.max(0, prev - 1));
  
  // Start auto-repeat
  startAutoRepeat(action);
};

// Touch Events  
const handleTouchStart = (action: 'increment' | 'decrement') => {
  handleMouseDown(action); // Same logic
};
```

## 🏗️ Implementation Plan

### Phase 1: Core Auto-repeat Logic
- [ ] Add state management for repeat functionality
- [ ] Implement setInterval-based auto-repeat system
- [ ] Add proper cleanup with useEffect and refs

### Phase 2: Mouse Event Integration
- [ ] Add onMouseDown handlers to existing buttons
- [ ] Implement onMouseUp and onMouseLeave for stop conditions
- [ ] Test desktop mouse interactions

### Phase 3: Touch Event Support
- [ ] Add onTouchStart and onTouchEnd handlers
- [ ] Handle touch-specific edge cases
- [ ] Test on mobile devices/touch screens

### Phase 4: Visual Enhancements
- [ ] Add visual feedback for held state
- [ ] Implement button press animations
- [ ] Add counter transition animations

### Phase 5: Testing & Refinement
- [ ] Test timing intervals and user experience
- [ ] Verify bounds checking during auto-repeat
- [ ] Performance testing for long holds
- [ ] Cross-platform compatibility testing

## ✅ Acceptance Criteria

### Core Functionality
- ✅ Single click performs single increment/decrement
- ✅ Holding button for 500ms starts auto-repeat
- ✅ Auto-repeat continues every 100ms while held
- ✅ Releasing button stops auto-repeat immediately
- ✅ Bounds checking prevents counter going below 0

### Platform Support
- ✅ Works with mouse on desktop browsers
- ✅ Works with touch on mobile devices
- ✅ Handles edge cases (mouse leave, touch cancel)
- ✅ No conflicts with existing click behavior

### User Experience
- ✅ Visual feedback shows button is being held
- ✅ Responsive and smooth interactions
- ✅ Performance remains good during long holds
- ✅ Intuitive behavior matches user expectations

### Technical Quality
- ✅ TypeScript compilation without errors
- ✅ Proper cleanup of intervals and timeouts
- ✅ No memory leaks from event handlers
- ✅ Clean and maintainable code structure

## 🎯 Advanced Features (Optional)

### Progressive Speed
- Increase repeat speed the longer button is held
- Start slow (200ms) → medium (100ms) → fast (50ms)

### Keyboard Support
- Hold Enter/Space on focused button for auto-repeat
- Arrow keys for increment/decrement

### Customizable Timing
- Configuration for initial delay and repeat interval
- Different speeds for increment vs decrement

## 📝 Technical Considerations

### Performance
- Use requestAnimationFrame for smooth animations
- Debounce rapid state changes
- Optimize re-renders during auto-repeat

### Accessibility
- Maintain keyboard navigation
- Screen reader compatibility
- Focus management during auto-repeat

### Browser Compatibility
- Handle different touch event implementations
- Fallback for older browsers
- Test across major browsers and devices

## 🔗 Related Documentation

### Existing Features
- **Base Counter:** `.github/contexts/counter-feature.md`
- **Project Setup:** `.github/contexts/project-setup.md`

### This Feature
- **Implementation Plan:** This document
- **Context (TBD):** `.github/contexts/auto-repeat-feature.md`

## 📋 Status Summary

**Planning:** ✅ Complete and detailed  
**Technical Design:** ✅ Event-driven with proper cleanup  
**User Experience:** ✅ Intuitive hold-to-repeat behavior  
**Implementation:** Ready to begin with `gogogo`

---
*Plan created using the `nnn` workflow for separated feature development*