import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordian";


const Faq = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I import test cases?</AccordionTrigger>
          <AccordionContent>
            You can import test cases by uploading a CSV file with our
            preformatted template. Simply navigate to the "Test Cases"
            section, click on "Import," and follow the instructions to
            upload your file. Our system will automatically process the
            file and import your test cases.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a 14-day free trial with access to most of our
            features. You can sign up for the free trial without providing
            any payment information. After the trial period, you can choose
            to upgrade to one of our paid plans or continue with limited
            features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I integrate this tool with other software?</AccordionTrigger>
          <AccordionContent>
            Yes, our platform offers integration with popular project
            management tools, issue trackers, and CI/CD pipelines. We
            provide API access in our Pro and Enterprise plans, allowing
            you to build custom integrations with your existing tools and
            workflows.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How many users can I add to my account?</AccordionTrigger>
          <AccordionContent>
            The number of users depends on your subscription plan. The Free
            Trial allows up to 5 users, Basic plan up to 10 users, Pro plan
            up to 25 users, and Enterprise plan offers unlimited users. You
            can upgrade your plan at any time to add more users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
          <AccordionContent>
            We offer different levels of support based on your subscription
            plan. All plans include email support. The Basic plan adds chat
            support, the Pro plan includes priority support, and the
            Enterprise plan offers 24/7 premium support with a dedicated
            account manager and custom training sessions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
