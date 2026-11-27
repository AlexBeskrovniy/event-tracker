import { createEvent, type ActionResponse } from '@/app/actions/events';
import { useActionState } from 'react';
import { useCalendarContext } from '@/app/components/CalendarProvider';

type EventFormProps = {
    defaultDate: string;
}

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}

export default function EventForm({ defaultDate }: EventFormProps) {
    const [state, formAction, isPending] = useActionState(createEvent, initialState);
    const calendar = useCalendarContext();

    return (
        <form className="form" action={formAction}>
            {state.message && state.message}
            <div className="form-date-input-wrapper">
                <span className="form-date-input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                </span>
                <input
                    className="form-input"
                    type="date"
                    name="date"
                    defaultValue={defaultDate}
                    required
                />
            </div>
            <input
                className="form-input"
                type="text"
                name="title"
                placeholder='Name'
                required
            />
            <select name="priority" defaultValue={'low'}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <textarea
                className="form-textarea"
                name="description" 
                rows={5}
                placeholder='Notes'
            >
            </textarea>
            
            <input type="hidden" name="calendar_id" value={calendar?.id} />

            <button disabled={isPending}>Submit</button>
        </form>
    );

}
            // <SubmitButton loading={loading} />
