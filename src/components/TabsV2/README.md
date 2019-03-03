



<!-- GENERATED:PROPS_TABLE:BEGIN -->
## Props
prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**about** | `String` |  | :x: | 
**accessKey** | `String` |  | :x: | 
**aria-activedescendant** | `String` |  | :x: | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
**aria-atomic** | `boolean \| "false" \| "true"` |  | :x: | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
**aria-autocomplete** | `"none" \| "inline" \| "list" \| "both"` |  | :x: | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.
**aria-busy** | `boolean \| "false" \| "true"` |  | :x: | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
**aria-checked** | `boolean \| "false" \| "true" \| "mixed"` |  | :x: | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. @see aria-pressed @see aria-selected.
**aria-colcount** | `Number` |  | :x: | Defines the total number of columns in a table, grid, or treegrid. @see aria-colindex.
**aria-colindex** | `Number` |  | :x: | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. @see aria-colcount @see aria-colspan.
**aria-colspan** | `Number` |  | :x: | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. @see aria-colindex @see aria-rowspan.
**aria-controls** | `String` |  | :x: | Identifies the element (or elements) whose contents or presence are controlled by the current element. @see aria-owns.
**aria-current** | `boolean \| "time" \| "false" \| "true" \| "page" \| "step" \| "location" \| "date"` |  | :x: | Indicates the element that represents the current item within a container or set of related elements.
**aria-describedby** | `String` |  | :x: | Identifies the element (or elements) that describes the object. @see aria-labelledby
**aria-details** | `String` |  | :x: | Identifies the element that provides a detailed, extended description for the object. @see aria-describedby.
**aria-disabled** | `boolean \| "false" \| "true"` |  | :x: | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. @see aria-hidden @see aria-readonly.
**aria-dropeffect** | `"link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"` |  | :x: | Indicates what functions can be performed when a dragged object is released on the drop target. @deprecated in ARIA 1.1
**aria-errormessage** | `String` |  | :x: | Identifies the element that provides an error message for the object. @see aria-invalid @see aria-describedby.
**aria-expanded** | `boolean \| "false" \| "true"` |  | :x: | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
**aria-flowto** | `String` |  | :x: | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
**aria-grabbed** | `boolean \| "false" \| "true"` |  | :x: | Indicates an element's "grabbed" state in a drag-and-drop operation. @deprecated in ARIA 1.1
**aria-haspopup** | `boolean \| "dialog" \| "menu" \| "false" \| "true" \| "listbox" \| "tree" \| "grid"` |  | :x: | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
**aria-hidden** | `boolean \| "false" \| "true"` |  | :x: | Indicates whether the element is exposed to an accessibility API. @see aria-disabled.
**aria-invalid** | `boolean \| "false" \| "true" \| "grammar" \| "spelling"` |  | :x: | Indicates the entered value does not conform to the format expected by the application. @see aria-errormessage.
**aria-keyshortcuts** | `String` |  | :x: | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
**aria-label** | `String` |  | :x: | Defines a string value that labels the current element. @see aria-labelledby.
**aria-labelledby** | `String` |  | :x: | Identifies the element (or elements) that labels the current element. @see aria-describedby.
**aria-level** | `Number` |  | :x: | Defines the hierarchical level of an element within a structure.
**aria-live** | `"off" \| "assertive" \| "polite"` |  | :x: | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
**aria-modal** | `boolean \| "false" \| "true"` |  | :x: | Indicates whether an element is modal when displayed.
**aria-multiline** | `boolean \| "false" \| "true"` |  | :x: | Indicates whether a text box accepts multiple lines of input or only a single line.
**aria-multiselectable** | `boolean \| "false" \| "true"` |  | :x: | Indicates that the user may select more than one item from the current selectable descendants.
**aria-orientation** | `"horizontal" \| "vertical"` |  | :x: | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
**aria-owns** | `String` |  | :x: | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. @see aria-controls.
**aria-placeholder** | `String` |  | :x: | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
**aria-posinset** | `Number` |  | :x: | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. @see aria-setsize.
**aria-pressed** | `boolean \| "false" \| "true" \| "mixed"` |  | :x: | Indicates the current "pressed" state of toggle buttons. @see aria-checked @see aria-selected.
**aria-readonly** | `boolean \| "false" \| "true"` |  | :x: | Indicates that the element is not editable, but is otherwise operable. @see aria-disabled.
**aria-relevant** | `"text" \| "additions" \| "additions text" \| "all" \| "removals"` |  | :x: | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. @see aria-atomic.
**aria-required** | `boolean \| "false" \| "true"` |  | :x: | Indicates that user input is required on the element before a form may be submitted.
**aria-roledescription** | `String` |  | :x: | Defines a human-readable, author-localized description for the role of an element.
**aria-rowcount** | `Number` |  | :x: | Defines the total number of rows in a table, grid, or treegrid. @see aria-rowindex.
**aria-rowindex** | `Number` |  | :x: | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. @see aria-rowcount @see aria-rowspan.
**aria-rowspan** | `Number` |  | :x: | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. @see aria-rowindex @see aria-colspan.
**aria-selected** | `boolean \| "false" \| "true"` |  | :x: | Indicates the current "selected" state of various widgets. @see aria-checked @see aria-pressed.
**aria-setsize** | `Number` |  | :x: | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. @see aria-posinset.
**aria-sort** | `"none" \| "ascending" \| "descending" \| "other"` |  | :x: | Indicates if items in a table or grid are sorted in ascending or descending order.
**aria-valuemax** | `Number` |  | :x: | Defines the maximum allowed value for a range widget.
**aria-valuemin** | `Number` |  | :x: | Defines the minimum allowed value for a range widget.
**aria-valuenow** | `Number` |  | :x: | Defines the current value for a range widget. @see aria-valuetext.
**aria-valuetext** | `String` |  | :x: | Defines the human readable text alternative of aria-valuenow for a range widget.
**autoCapitalize** | `String` |  | :x: | 
**autoCorrect** | `String` |  | :x: | 
**autoSave** | `String` |  | :x: | 
**className** | `String` |  | :x: | 
**color** | `String` |  | :x: | 
**contentEditable** | `boolean` |  | :x: | 
**contextMenu** | `String` |  | :x: | 
**css** | `Interpolation` |  | :x: | 
**dangerouslySetInnerHTML** | `{ __html: string; }` |  | :x: | 
**datatype** | `String` |  | :x: | 
**defaultChecked** | `boolean` |  | :x: | 
**defaultValue** | `string \| string[]` |  | :x: | 
**dir** | `String` |  | :x: | 
**draggable** | `boolean` |  | :x: | 
**hidden** | `boolean` |  | :x: | 
**id** | `String` |  | :x: | 
**inlist** | `*` |  | :x: | 
**innerRef** | `Ref<any>` |  | :x: | 
**inputMode** | `String` |  | :x: | 
**is** | `String` |  | :x: | 
**itemID** | `String` |  | :x: | 
**itemProp** | `String` |  | :x: | 
**itemRef** | `String` |  | :x: | 
**itemScope** | `boolean` |  | :x: | 
**itemType** | `String` |  | :x: | 
**key** | `string \| number` |  | :x: | 
**lang** | `String` |  | :x: | 
**onAbort** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onAbortCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onAnimationEnd** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onAnimationEndCapture** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onAnimationIteration** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onAnimationIterationCapture** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onAnimationStart** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onAnimationStartCapture** | `(event: AnimationEvent<HTMLElement>) => void` |  | :x: | 
**onBeforeInput** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onBeforeInputCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onBlur** | `(event: FocusEvent<HTMLElement>) => void` |  | :x: | 
**onBlurCapture** | `(event: FocusEvent<HTMLElement>) => void` |  | :x: | 
**onCanPlay** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onCanPlayCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onCanPlayThrough** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onCanPlayThroughCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onChange** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onChangeCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onClick** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onClickCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onCompositionEnd** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onCompositionEndCapture** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onCompositionStart** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onCompositionStartCapture** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onCompositionUpdate** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onCompositionUpdateCapture** | `(event: CompositionEvent<HTMLElement>) => void` |  | :x: | 
**onContextMenu** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onContextMenuCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onCopy** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onCopyCapture** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onCut** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onCutCapture** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onDoubleClick** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onDoubleClickCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onDrag** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragEnd** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragEndCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragEnter** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragEnterCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragExit** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragExitCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragLeave** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragLeaveCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragOver** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragOverCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragStart** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDragStartCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDrop** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDropCapture** | `(event: DragEvent<HTMLElement>) => void` |  | :x: | 
**onDurationChange** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onDurationChangeCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEmptied** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEmptiedCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEncrypted** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEncryptedCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEnded** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onEndedCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onError** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onErrorCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onFocus** | `(event: FocusEvent<HTMLElement>) => void` |  | :x: | 
**onFocusCapture** | `(event: FocusEvent<HTMLElement>) => void` |  | :x: | 
**onGotPointerCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onGotPointerCaptureCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onInput** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onInputCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onInvalid** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onInvalidCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onKeyDown** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onKeyDownCapture** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onKeyPress** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onKeyPressCapture** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onKeyUp** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onKeyUpCapture** | `(event: KeyboardEvent<HTMLElement>) => void` |  | :x: | 
**onLoad** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadStart** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadStartCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadedData** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadedDataCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadedMetadata** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLoadedMetadataCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onLostPointerCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onLostPointerCaptureCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onMouseDown** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseDownCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseEnter** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseLeave** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseMove** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseMoveCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseOut** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseOutCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseOver** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseOverCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseUp** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onMouseUpCapture** | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |  | :x: | 
**onPaste** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onPasteCapture** | `(event: ClipboardEvent<HTMLElement>) => void` |  | :x: | 
**onPause** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPauseCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPlay** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPlayCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPlaying** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPlayingCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onPointerCancel** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerCancelCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerDown** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerDownCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerEnter** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerEnterCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerLeave** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerLeaveCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerMove** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerMoveCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerOut** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerOutCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerOver** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerOverCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerUp** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onPointerUpCapture** | `(event: PointerEvent<HTMLElement>) => void` |  | :x: | 
**onProgress** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onProgressCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onRateChange** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onRateChangeCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onReset** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onResetCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onScroll** | `(event: UIEvent<HTMLElement>) => void` |  | :x: | 
**onScrollCapture** | `(event: UIEvent<HTMLElement>) => void` |  | :x: | 
**onSeeked** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSeekedCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSeeking** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSeekingCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSelect** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSelectCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onStalled** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onStalledCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSubmit** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onSubmitCapture** | `(event: FormEvent<HTMLElement>) => void` |  | :x: | 
**onSuspend** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onSuspendCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onTimeUpdate** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onTimeUpdateCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onTouchCancel** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchCancelCapture** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchEnd** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchEndCapture** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchMove** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchMoveCapture** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchStart** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTouchStartCapture** | `(event: TouchEvent<HTMLElement>) => void` |  | :x: | 
**onTransitionEnd** | `(event: TransitionEvent<HTMLElement>) => void` |  | :x: | 
**onTransitionEndCapture** | `(event: TransitionEvent<HTMLElement>) => void` |  | :x: | 
**onVolumeChange** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onVolumeChangeCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onWaiting** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onWaitingCapture** | `(event: SyntheticEvent<HTMLElement, Event>) => void` |  | :x: | 
**onWheel** | `(event: WheelEvent<HTMLElement>) => void` |  | :x: | 
**onWheelCapture** | `(event: WheelEvent<HTMLElement>) => void` |  | :x: | 
**placeholder** | `String` |  | :x: | 
**prefix** | `String` |  | :x: | 
**property** | `String` |  | :x: | 
**radioGroup** | `String` |  | :x: | 
**resource** | `String` |  | :x: | 
**results** | `Number` |  | :x: | 
**role** | `String` |  | :x: | 
**scrollToTab** | `Number` |  | :x: | 
**security** | `String` |  | :x: | 
**slot** | `String` |  | :x: | 
**spellCheck** | `boolean` |  | :x: | 
**style** | `CSSProperties` |  | :x: | 
**suppressContentEditableWarning** | `boolean` |  | :x: | 
**suppressHydrationWarning** | `boolean` |  | :x: | 
**tabIndex** | `Number` |  | :x: | 
**theme** | `{ colors: { brand01: string; brand02: string; brand03: string; ui01: string; ui02: string; ui03: string; ui04: string; ui05: string; text01: string; text02: string; text03: string; inverse01: string; field01: string; ... 5 more ...; nav02: string; }; ... 4 more ...; breakpoints: Required<...>; }` |  | :x: | 
**title** | `String` |  | :x: | 
**typeof** | `String` |  | :x: | 
**unselectable** | `"on" \| "off"` |  | :x: | 
**vocab** | `String` |  | :x: | 
<!-- GENERATED:PROPS_TABLE:END -->



