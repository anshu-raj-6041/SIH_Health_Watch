'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Thermometer, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/components/language-switcher';

// Form validation schema
const symptomReportSchema = z.object({
  patientName: z.string().min(1, 'Patient name is required'),
  age: z.number().min(0).max(150, 'Age must be between 0 and 150'),
  village: z.string().min(1, 'Village is required'),
  contactNumber: z.string().optional(),
  symptoms: z.array(z.string()).min(1, 'At least one symptom must be selected'),
  additionalNotes: z.string().optional(),
});

type SymptomReportForm = z.infer<typeof symptomReportSchema>;

// Available symptoms
const availableSymptoms = [
  { id: 'fever', label: 'Fever' },
  { id: 'dehydration', label: 'Dehydration' },
  { id: 'fatigue', label: 'Fatigue' },
  { id: 'diarrhea', label: 'Diarrhea' },
  { id: 'abdominal_pain', label: 'Abdominal pain' },
  { id: 'headache', label: 'Headache' },
  { id: 'vomiting', label: 'Vomiting' },
  { id: 'nausea', label: 'Nausea' },
];

// Sample villages (you can replace with actual data)
const villages = [
  'Barpeta',
  'Dhubri',
  'Dibrugarh',
  'Dispur',
  'Goalpara',
  'Jorhat',
  'Nagaon',
  'Sivasagar',
  'Tezpur',
  'Tinsukia',
];

// Translation keys for the symptom report
const getTranslations = (t: (key: string) => string) => ({
  title: t('symptoms.title') || 'Symptom Report',
  subtitle: t('symptoms.subtitle') || 'Record patient symptoms and basic health indicators.',
  patientInfo: t('symptoms.patientInfo') || 'Patient Information',
  patientName: t('symptoms.patientName') || 'Patient Name',
  patientNamePlaceholder: t('symptoms.patientNamePlaceholder') || 'Enter patient name',
  age: t('symptoms.age') || 'Age',
  agePlaceholder: t('symptoms.agePlaceholder') || 'Age',
  village: t('symptoms.village') || 'Village',
  villagePlaceholder: t('symptoms.villagePlaceholder') || 'Select village',
  contactNumber: t('symptoms.contactNumber') || 'Contact Number',
  contactNumberPlaceholder: t('symptoms.contactNumberPlaceholder') || 'Phone number',
  symptomsTitle: t('symptoms.symptomsTitle') || 'Symptoms (check all that apply)',
  additionalNotes: t('symptoms.additionalNotes') || 'Additional Notes',
  additionalNotesPlaceholder: t('symptoms.additionalNotesPlaceholder') || 'Any additional observations or notes...',
  submitButton: t('symptoms.submitButton') || 'Submit Report',
  submitting: t('symptoms.submitting') || 'Submitting...',
  successMessage: t('symptoms.successMessage') || 'Symptom report submitted successfully!',
  errorMessage: t('symptoms.errorMessage') || 'Error submitting report. Please try again.',
});

export function SymptomReportSection() {
  const { t } = useLanguage();
  const translations = getTranslations(t);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<SymptomReportForm>({
    resolver: zodResolver(symptomReportSchema),
    defaultValues: {
      symptoms: [],
    },
  });

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    const newSymptoms = checked
      ? [...selectedSymptoms, symptomId]
      : selectedSymptoms.filter(id => id !== symptomId);
    
    setSelectedSymptoms(newSymptoms);
    setValue('symptoms', newSymptoms);
  };

  const onSubmit = async (data: SymptomReportForm) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Get existing reports from localStorage
      const existingReports = JSON.parse(localStorage.getItem('symptomReports') || '[]');
      
      // Create new report with timestamp
      const newReport = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      
      // Add new report to existing ones
      const updatedReports = [newReport, ...existingReports];
      
      // Save to localStorage
      localStorage.setItem('symptomReports', JSON.stringify(updatedReports));
      
      setSubmitSuccess(true);
      reset();
      setSelectedSymptoms([]);
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="symptoms" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Thermometer className="h-6 w-6" />
                {translations.title}
              </CardTitle>
              <CardDescription>
                {translations.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Patient Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{translations.patientInfo}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">{translations.patientName}</Label>
                      <Input
                        id="patientName"
                        placeholder={translations.patientNamePlaceholder}
                        {...register('patientName')}
                        className={errors.patientName ? 'border-red-500' : ''}
                      />
                      {errors.patientName && (
                        <p className="text-sm text-red-500">{errors.patientName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">{translations.age}</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder={translations.agePlaceholder}
                        {...register('age', { valueAsNumber: true })}
                        className={errors.age ? 'border-red-500' : ''}
                      />
                      {errors.age && (
                        <p className="text-sm text-red-500">{errors.age.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="village">{translations.village}</Label>
                      <Select onValueChange={(value) => setValue('village', value)}>
                        <SelectTrigger className={errors.village ? 'border-red-500' : ''}>
                          <SelectValue placeholder={translations.villagePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {villages.map((village) => (
                            <SelectItem key={village} value={village}>
                              {village}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.village && (
                        <p className="text-sm text-red-500">{errors.village.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNumber">{translations.contactNumber}</Label>
                      <Input
                        id="contactNumber"
                        placeholder={translations.contactNumberPlaceholder}
                        {...register('contactNumber')}
                      />
                    </div>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{translations.symptomsTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {availableSymptoms.map((symptom) => (
                      <div key={symptom.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={symptom.id}
                          checked={selectedSymptoms.includes(symptom.id)}
                          onCheckedChange={(checked) =>
                            handleSymptomChange(symptom.id, checked as boolean)
                          }
                        />
                        <Label htmlFor={symptom.id} className="text-sm">
                          {symptom.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.symptoms && (
                    <p className="text-sm text-red-500">{errors.symptoms.message}</p>
                  )}
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">{translations.additionalNotes}</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder={translations.additionalNotesPlaceholder}
                    {...register('additionalNotes')}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        {translations.submitting}
                      </>
                    ) : (
                      translations.submitButton
                    )}
                  </Button>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                    <CheckCircle className="h-5 w-5" />
                    <span>{translations.successMessage}</span>
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5" />
                    <span>{translations.errorMessage}</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
